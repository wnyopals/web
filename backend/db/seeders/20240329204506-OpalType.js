'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OpalTypes', [
      { name: "Black", description: "", createdAt: new Date(), updatedAt: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { name: "Dark", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Semi Dark", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Light", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "White", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chrystal", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Boulder", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Black Chrystal", description: "", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dark Chrystal", description: "", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OpalTypes', null, {});
  }
};
