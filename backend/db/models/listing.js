'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Listing.init({
    status: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    type: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    bodyTone: DataTypes.INTEGER,
    brightness: DataTypes.INTEGER,
    cut: DataTypes.INTEGER,
    dome: DataTypes.INTEGER,
    origin: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};