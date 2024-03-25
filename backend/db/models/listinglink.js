'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListingLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListingLink.init({
    listingId: DataTypes.INTEGER,
    linkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListingLink',
  });
  return ListingLink;
};