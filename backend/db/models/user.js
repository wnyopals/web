'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    addressLineOne: DataTypes.STRING,
    addressLineTwo: DataTypes.STRING,
    addressCity: DataTypes.STRING,
    addressStateProvince: DataTypes.STRING,
    addressPostalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};