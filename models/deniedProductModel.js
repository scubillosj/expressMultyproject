import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ProductoNegado = sequelize.define("ProductoNegado", {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cantidad_negada: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    origen: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    referencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  return ProductoNegado;
};
