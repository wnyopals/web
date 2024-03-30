'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Domes', [
      {name: "Low", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Medium Low", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Medium High", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Heigh", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Domes', null, {})
  }
};
