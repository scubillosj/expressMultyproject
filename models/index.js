import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
import userModel from './userModel.js';
import deniedProductModel from './deniedProductModel.js';
import pickingModel from './pickingModel.js';
import origenModel from './origenModel.js';

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
db.Origen = origenModel(sequelize, DataTypes);

db.Origen.hasMany(db.DeniedProduct, { 
    foreignKey: 'origen', 
    targetKey: 'origen' 
});

db.DeniedProduct.belongsTo(db.Origen, { 
    foreignKey: 'origen', 
    targetKey: 'origen' 
});

db.Origen.hasMany(db.Picking, { 
    foreignKey: 'origen', 
    targetKey: 'origen' 
});

db.Picking.belongsTo(db.Origen, { 
    foreignKey: 'origen', 
    targetKey: 'origen' 
});

export default db;