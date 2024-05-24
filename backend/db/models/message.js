'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log("Models: ", models)
      Message.belongsTo(models.Inquiry, {
        foreignKey: "inquiryId"
      })

      Message.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  Message.init({
    message: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    inquiryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};