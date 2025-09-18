// models/Picking.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const pickingModel = sequelize.define('Picking', {
    // Columna: 'ID' (clave primaria de otro sistema)
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'ID',
    },
    // Columna: 'Nombre de la empresa a mostrar en la factura'
    nombreEmpresaFactura: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Nombre de la empresa a mostrar en la factura',
    },
    // Columna: 'Asociado/Documento de Identificación'
    documentoIdentificacion: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'Asociado/Documento de Identificación',
    },
    // Columna: 'Fecha de Factura/Recibo'
    fechaFacturaRecibo: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'Fecha de Factura/Recibo',
    },
    // Columna: 'Vendedor'
    vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Vendedor',
    },
    // Columna: 'Líneas de factura/Cantidad'
    cantidadLineasFactura: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Líneas de factura/Cantidad',
    },
    // Columna: 'Líneas de factura/Producto'
    productoLineasFactura: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Líneas de factura/Producto',
    },
    // Columna: 'Peso Total'
    pesoTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Peso Total',
    },
    // Columna: 'Líneas de factura/Producto/Peso'
    pesoProductoLineasFactura: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Líneas de factura/Producto/Peso',
    },
    // Columna: 'Asociado/Ciudad'
    ciudadAsociado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Asociado/Ciudad',
    },
    // Columna: 'Asociado/Zona'
    zonaAsociado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Asociado/Zona',
    },
    // Columna: 'Origen'
    origen: {
      type: DataTypes.STRING(7),
      allowNull: false,
      field: 'Origen',
    },
   ID: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ID',
    },

  }, {
    tableName: 'pickings',
    freezeTableName: true,
    timestamps: false,
  });
  return pickingModel;
};