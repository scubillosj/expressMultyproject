// models/origenModel.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const origenModel = sequelize.define('Origen', {
    origen: {
      type: DataTypes.STRING(7),
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'Documento Origen' 
    },
    
  }, {
    tableName: 'Origen',
    timestamps: false,
    freezeTableName: true,
  });

  return origenModel;
};