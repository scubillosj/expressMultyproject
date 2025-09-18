import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

import userModel from './userModel.js';
import deniedProductModel from './deniedProductModel.js';
import pickingModel from './pickingModel.js';
import { pickingDeniedProductsModel } from './pickingDeniedProductsModel.js';

dotenv.config();

// Conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Modelos
db.User = userModel(sequelize, DataTypes);
db.DeniedProduct = deniedProductModel(sequelize, DataTypes);
db.Picking = pickingModel(sequelize, DataTypes);
db.PickingDeniedProducts = pickingDeniedProductsModel(sequelize, DataTypes);

// Relaciones muchos a muchos (usando tabla intermedia)
db.Picking.belongsToMany(db.DeniedProduct, {
  through: db.PickingDeniedProducts,
  foreignKey: 'pickingId',
  otherKey: 'deniedProductId',
});

db.DeniedProduct.belongsToMany(db.Picking, {
  through: db.PickingDeniedProducts,
  foreignKey: 'deniedProductId',
  otherKey: 'pickingId',
});

export default db;
