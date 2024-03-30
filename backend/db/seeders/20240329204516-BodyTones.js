'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("BodyTones", [
      {name: "N1", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N2", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N3", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N4", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N5", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N6", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N7", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N8", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "N9", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BodyTones', null, {});
  }
};
