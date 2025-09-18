export default (sequelize, DataTypes) => {
  const PickingDeniedProducts = sequelize.define("PickingDeniedProducts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pickingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pickings", 
        key: "id",
      },
    },
    deniedProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "DeniedProducts", 
        key: "id",
      },
    },
  });

  return PickingDeniedProducts;
};
