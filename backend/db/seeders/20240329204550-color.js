'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Colors', [
      {name: "Red", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Orange", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Gold", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Green", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Turquoise", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Blue", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Purple", description: "", createdAt: new Date(), updatedAt: new Date() },
      {name: "Pink", description: "", createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {})
  }
};
