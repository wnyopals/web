'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ColorListingJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ColorListingJoin.init({
    colorId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ColorListingJoin',
  });
  return ColorListingJoin;
};