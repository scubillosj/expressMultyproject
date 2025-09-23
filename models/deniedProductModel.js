// models/DeniedProduct.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const deniedProductModel = sequelize.define('DeniedProduct', {
    // ID autoincrementable
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Columna: 'Fecha Programada'
    fechaProgramada: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'Fecha Programada',
    },
    // Columna: 'Referencia'
    referencia: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Referencia',
    },
    // Columna: 'Ubicación Destino'
    ubicacionDestino: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Ubicación Destino',
    },
    // Columna: 'Ubicación Origen'
    ubicacionOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Ubicación Origen',
    },
    // Columna: 'Movimientos de Existencias/Descripción'
    descripcionMovimiento: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Movimientos de Existencias/Descripción',
    },
    // Columna: 'Movimientos de Existencias/Cantidad Real'
    cantidadReal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Movimientos de Existencias/Cantidad Real',
    },
    // Columna: 'Movimientos de Existencias/Cantidad hecha'
    cantidadHecha: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Movimientos de Existencias/Cantidad hecha',
    },
    // Columna: 'Movimientos de Existencias/Cantidad Reservada'
    cantidadReservada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Movimientos de Existencias/Cantidad Reservada',
    },
    // Columna: 'Documento Origen' (clave para la unión)
    origen: {
      type: DataTypes.STRING(7),
      allowNull: false,
      field: 'Origen',
    },
  }, {
    tableName: 'denied_products',
    freezeTableName: true,
    timestamps: false,
  });
  return deniedProductModel;
};