'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactions.init({
    id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address_line_one: DataTypes.STRING,
    address_line_two: DataTypes.STRING,
    address_city: DataTypes.STRING,
    address_state_province: DataTypes.STRING,
    address_country: DataTypes.STRING,
    address_postal_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};