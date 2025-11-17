import { sequelize } from "../config/database.js";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a PostgreSQL en Railway 🚀");
  } catch (error) {
    console.error("Error al conectar:", error.message);
  }
})();
