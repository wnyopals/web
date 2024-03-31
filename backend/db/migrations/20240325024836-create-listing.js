'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER,
        references: {model: "ListingStatuses"}
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      type: {
        type: Sequelize.INTEGER,
        references: {model: "OpalTypes"}
      },
      weight: {
        type: Sequelize.FLOAT
      },
      length: {
        type: Sequelize.FLOAT
      },
      width: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      bodyTone: {
        type: Sequelize.INTEGER,
        references: {model: "BodyTones"}
      },
      brightness: {
        type: Sequelize.INTEGER,
        references: {model: "Brightnesses"}
      },
      cut: {
        type: Sequelize.INTEGER,
        references: {model: "Cuts"}
      },
      dome: {
        type: Sequelize.INTEGER,
        references: {model: "Domes"}
      },
      origin: {
        type: Sequelize.INTEGER,
        references: {model: "Origins"}
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Listings');
  }
};