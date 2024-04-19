'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasMany(models.TransactionStatus, {
        foreignKey: "transactionStatus"
      })
    }
  }
  Transaction.init({
    transactionStatus: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    addressLineOne: DataTypes.STRING,
    addressLineTwo: DataTypes.STRING,
    addressCity: DataTypes.STRING,
    addressStateProvince: DataTypes.STRING,
    addressCountry: DataTypes.STRING,
    addressPostalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};