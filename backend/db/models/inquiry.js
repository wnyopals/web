'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inquiry.hasMany(models.Message, {
        foreignKey: "inquiryId",
      })
      onDelete: "CASCADE"

      Inquiry.belongsTo(models.User, {
        foreignKey: "userId",
      })

      Inquiry.belongsTo(models.Listing, {
        foreignKey: "listingId"
      })
    }
  }
  Inquiry.init({
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    subject: DataTypes.STRING,
    subject: DataTypes.STRING,
    listingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inquiry',
  });
  return Inquiry;
};