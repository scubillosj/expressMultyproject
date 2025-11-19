import express from 'express';
import dotenv from 'dotenv';
import  { sequelize} from './models/index.js';  
import morgan from 'morgan';
 

import pickingRoutes from './routes/pickingRoutes.js'; 
import authRoutes from './routes/authRoutes.js'; 
import deniedProductRoutes from './routes/deniedProductRoutes.js';
import corteRoutes from './routes/corteRoutes.js';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON en las peticiones y morgan para informacion de peticiones
app.use(express.json());
app.use(morgan('dev'));


// Monta las rutas de la API con un prefijo
app.use('/api/picking', pickingRoutes);
app.use('/auth', authRoutes);
app.use('/api/denied-product', deniedProductRoutes);
app.use('/api/corte', corteRoutes);

// Sincroniza los modelos con la base de datos y luego inicia el servidor
sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos conectada y sincronizada correctamente.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });