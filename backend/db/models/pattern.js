'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pattern.belongsToMany(models.Listing, {
        through: "PatternListingJoin",
        foreignKey: "patternId",
        otherKey: "listingId"
      })
    }
  }
  Pattern.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};