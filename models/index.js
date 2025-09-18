import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
import userModel from './userModel.js';
import deniedProductModel from './deniedProductModel.js';
import pickingModel from './pickingModel.js';

dotenv.config();

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

db.User = userModel(sequelize, DataTypes);
db.DeniedProduct = deniedProductModel(sequelize, DataTypes);
db.Picking = pickingModel(sequelize, DataTypes);

// Relación muchos a muchos corregida entre Picking y DeniedProduct
db.Picking.belongsToMany(db.DeniedProduct, {
  through: 'PickingDeniedProducts',
  foreignKey: 'origen',
  otherKey: 'documentoOrigen',
});

db.DeniedProduct.belongsToMany(db.Picking, {
  through: 'PickingDeniedProducts',
  foreignKey: 'documentoOrigen',
  otherKey: 'origen',
});

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
export default db;