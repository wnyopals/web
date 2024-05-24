'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionStatus: {
        type: Sequelize.INTEGER,
        references: {
          model: "TransactionStatuses"
        }
      },
      listingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Listings"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        },
        onDelete: "SET NULL"
      },
      email: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      addressLineOne: {
        type: Sequelize.STRING
      },
      addressLineTwo: {
        type: Sequelize.STRING
      },
      addressCity: {
        type: Sequelize.STRING
      },
      addressStateProvince: {
        type: Sequelize.STRING
      },
      addressCountry: {
        type: Sequelize.STRING
      },
      addressPostalCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};