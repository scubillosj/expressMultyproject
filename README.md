Proyecto API Multy Express
Este proyecto es una API RESTful construida con Node.js, Express y Sequelize, diseñada para gestionar la logística de pickings, productos negados y usuarios. 
Se conecta a una base de datos PostgreSQL y está estructurada en capas para facilitar su mantenimiento y escalabilidad.

Primeros Pasos
Sigue estas instrucciones para configurar y ejecutar el proyecto en tu máquina local.

Prerrequisitos
Asegúrate de tener instalado lo siguiente:

Node.js y npm: https://nodejs.org/

PostgreSQL: https://www.postgresql.org/

Instalación
Clona el repositorio:

Bash

git clone https://github.com/scubillosj/expressMultyproject.git
Navega a la carpeta principal del proyecto e instala las dependencias:
>>>>>>cd expressMultyproject
>>>>>>npm install

Crea un archivo .env en la raíz del proyecto y añade las credenciales de tu base de datos:

PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_contraseña_aquí
DB_NAME=MultyprojectLogistic
Asegúrate de que la base de datos MultyprojectLogistic exista en tu servidor de PostgreSQL.

Ejecutar la Aplicación
Para iniciar el servidor, ejecuta el siguiente comando desde la carpeta principal del proyecto:
>>>>>>node APIMULTY/app.js

Si todo está configurado correctamente, verás un mensaje en la terminal que indica que el servidor se ha conectado a la base de datos y está corriendo en el puerto 3000.

Endpoints de la API
Los siguientes son los principales endpoints disponibles:

Método	Endpoint	Descripción
GET	/api/user	Obtiene todos los usuarios.
POST	/api/user	Crea un nuevo usuario.
GET	/api/picking	Obtiene todos los registros de picking.
POST	/api/picking	Crea un nuevo registro de picking.
GET	/api/denied-product	Obtiene todos los productos negados.
POST	/api/denied-product	Crea un nuevo producto negado.


Tecnologías Utilizadas
Node.js: Entorno de ejecución JavaScript.

Express.js: Framework para el servidor web.

Sequelize: ORM para interactuar con la base de datos.

PostgreSQL: Base de datos relacional.

dotenv: Para gestionar las variables de entorno.
