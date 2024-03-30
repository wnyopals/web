'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brightnesses', [
      {name: "B5 - Vivid", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "B4 - Very Bright", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "B3 - Bright", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "B2 - Moderatly Bright", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "B1 - Subdued", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
