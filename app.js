import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';   
//import pickingRoutes from './routes/pickingRoutes.js'; 
import userRoutes from './routes/userRoutes.js'; 
import deniedProductRoutes from './routes/deniedProductRoutes.js';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON en las peticiones
app.use(express.json());

// Monta las rutas de la API con un prefijo
//app.use('/api/picking', pickingRoutes);
app.use('/api/user', userRoutes);
app.use('/api/denied-product', deniedProductRoutes);

// Sincroniza los modelos con la base de datos y luego inicia el servidor
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos conectada y sincronizada correctamente.');
        // Inicia el servidor solo si la conexión es exitosa
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });