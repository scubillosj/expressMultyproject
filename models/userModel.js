
export default (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    typeofUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'users' 
  });

  return userModel;
};