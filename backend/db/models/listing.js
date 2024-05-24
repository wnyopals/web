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

      //one to many
      Listing.belongsTo(models.Cut, {
        foreignKey: "cut"
      })

      Listing.belongsTo(models.Brightness, {
        foreignKey: "brightness"
      })

      Listing.belongsTo(models.Dome, {
        foreignKey: "dome"
      })

      Listing.belongsTo(models.ListingStatus, {
        foreignKey: "status"
      })

      Listing.belongsTo(models.Origin, {
        foreignKey: "origin"
      })

      Listing.belongsTo(models.BodyTone, {
        foreignKey: "bodyTone"
      })

      Listing.belongsTo(models.OpalType, {
        foreignKey: "type"
      })

      Listing.hasMany(models.Transaction, {
        foreignKey: "listingId"
      })

      Listing.hasMany(models.Inquiry, {
        foreignKey: "listingId"
      })

      //many to many
      Listing.belongsToMany(models.Color, {
        through: "ColorListingJoin",
        foreignKey: "listingId",
        otherKey: "colorId",
        onDelete: "CASCADE"
      })

      Listing.belongsToMany(models.Pattern, {
        through: "PatternListingJoin",
        foreignKey: "listingId",
        otherKey: "patternId",
        onDelete: "CASCADE"
      })

      Listing.belongsToMany(models.Link, {
        through: "LinkListingJoin",
        foreignKey: "listingId",
        otherKey: "linkId",
        onDelete: "CASCADE"
      })
      //colors, Links, and patterns are the only many to many
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