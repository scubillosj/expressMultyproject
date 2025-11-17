import { Sequelize } from "sequelize";
import dotenv from "dotenv";

import userModelDef from "./userModel.js";
import deniedProductDef from "./deniedProductModel.js";
import pickingModelDef from "./pickingModel.js";
import cortesModelDef from "./cortesLogisticoModel.js";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: false, 
    },
  },
});

// MODELOS
const User = userModelDef(sequelize);
const ProductoNegado = deniedProductDef(sequelize);
const Picking = pickingModelDef(sequelize);
const CortesLogistico = cortesModelDef(sequelize);

// RELACIONES
CortesLogistico.hasMany(Picking, {
  foreignKey: "nombrecorte",
});
Picking.belongsTo(CortesLogistico, {
  foreignKey: "nombrecorte",
});

export {
  sequelize,
  User,
  ProductoNegado,
  Picking,
  CortesLogistico,
};
