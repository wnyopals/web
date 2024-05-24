"use strict";
const { Model } = require("sequelize");
const { Validator } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    toSafeObject() {
      const {email, id} = this;
      console.log(email, id)
      return {email, id}
    }

    static associate(models) {
      // define association here
      User.belongsToMany(models.Permission, {
        through: "PermissionsUserJoin",
        foreignKey: "userId",
        otherKey: "permissionId",
        onDelete: "CASCADE",
      })

      User.hasMany(models.Inquiry, {
        foreignKey: "userId"
      });

      User.hasMany(models.Transaction, {
        foreignKey: "userId"
      })
    }
  }
  User.init(
    {
      password:{ 
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          len: [60, 60] 
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isEmail(value) {
            if (!Validator.isEmail) {
              throw new Error("Email must be valid")
            }
          }
        }
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      addressLineOne: DataTypes.STRING,
      addressLineTwo: DataTypes.STRING,
      addressCity: DataTypes.STRING,
      addressStateProvince: DataTypes.STRING,
      addressPostalCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      scopes: {
        /**
         * A scope tells seqielize what to include when it runs a query with
         * that scope. Say I want to run a query to find all of the listings
         * in my database. It may take a while to run, so I could put a
         * search scope in that excludes some attributes to make the
         * query faster
         */
        currentUser: {
          attributes: { exclude: ["password"] },
        },
        loginUser: {
          attributes: {},
        },
      },
      defaultScope: {
        //a default scope tells sequelize what is sent back by default.
        //I do not want to expose the user's password, even if it is hashed so
        //I will exclude that attribute. That means whenever I run a query to
        //the database this will always be included as long as I use the model
        attributes: {
          exclude: [
            "password",
            "email",
            "role",
            "createdAt",
            "updatedAt",
          ],
        },
      }
    }
  );
  return User;
};
