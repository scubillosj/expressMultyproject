import { DataTypes } from "sequelize";

export default (sequelize) => {
  const CortesLogistico = sequelize.define("CortesLogistico", {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
  });

  return CortesLogistico;
};
