'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatternListingJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PatternListingJoin.init({
    listingId: DataTypes.INTEGER,
    patternId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PatternListingJoin',
  });
  return PatternListingJoin;
};