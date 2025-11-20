import swaggerJSDoc from "swagger-jsdoc";
// Importamos todo como 'swaggerUi' para acceder a .serve y .setup
import * as swaggerUi from "swagger-ui-express"; 
import { fileURLToPath } from 'url';
import path from 'path';

// Define __filename y __dirname (necesario en ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define la ruta base del proyecto (que es un nivel arriba de 'config')
const rootPath = path.resolve(__dirname, '..'); // Directorio APIMULTY

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API MULT-STREAMLIT",
            version: "1.0.0",
            description: "Documentación Swagger de tu API Express",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    // ✅ RUTAS ABSOLUTAS: Asegura que swaggerJSDoc encuentre los archivos desde la raíz.
    apis: [
        path.join(rootPath, 'routes', '*.js'), 
        path.join(rootPath, 'controllers', '*.js')
    ],
};

export const swaggerSpec = swaggerJSDoc(options);

// ✅ Exportamos las funciones necesarias con nombres explícitos
export const swaggerServe = swaggerUi.serve;
export const swaggerSetup = swaggerUi.setup;

// Nota: No necesitas exportar 'swaggerUi' ya que solo usas sus propiedades 'serve' y 'setup'.