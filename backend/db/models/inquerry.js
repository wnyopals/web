'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inquerry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inquerry.init({
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    subject: DataTypes.STRING,
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    listingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inquerry',
  });
  return Inquerry;
};