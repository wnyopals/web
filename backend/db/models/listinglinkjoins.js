'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListingLinkJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListingLinkJoin.init({
    listingId: DataTypes.INTEGER,
    linkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListingLinkJoin',
  });
  return ListingLinkJoin;
};