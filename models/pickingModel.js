import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Picking = sequelize.define("Picking", {
    nombreAsociado: DataTypes.STRING(500),
    fechaFactura: DataTypes.DATEONLY,
    identificacionAsociado: DataTypes.STRING(15),
    vendedor: DataTypes.STRING(100),
    cantidad: DataTypes.DECIMAL(10, 2),
    producto: DataTypes.STRING(1000),
    pesoUnitario: DataTypes.DECIMAL(10, 2),
    cuidad: DataTypes.STRING(50),
    codigoZona: DataTypes.STRING(50),
    zona: DataTypes.STRING(50),
    origen: DataTypes.STRING(7),
    marca: DataTypes.STRING(50),
    idOdoo: DataTypes.STRING(250),
    fecha_procesamiento: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  });

  return Picking;
};
