import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

import userModelDef from './userModel.js';
import deniedProductModelDef from './deniedProductModel.js';
import pickingModelDef from './pickingModel.js';
import origenModelDef from './origenModel.js';

dotenv.config();

// Instancia Sequelize
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


const User = userModelDef(sequelize);
const DeniedProduct = deniedProductModelDef(sequelize);
const Picking = pickingModelDef(sequelize);
const Origen = origenModelDef(sequelize);



Origen.hasMany(Picking, {
  foreignKey: 'origen',   
  sourceKey: 'origen',    
});

Picking.belongsTo(Origen, {
  foreignKey: 'origen',
  targetKey: 'origen',
});

Origen.hasMany(Picking, {
  foreignKey: 'origen',
  sourceKey: 'origen',
});

Picking.belongsTo(Origen, {
  foreignKey: 'origen',
  targetKey: 'origen',
});


export {
  sequelize,
  User,
  DeniedProduct,
  Picking,
  Origen,
};
