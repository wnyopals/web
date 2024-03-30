'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Listings", [
      {
        status: 1,
        title: "Test Listing",
        description: "This is a description",
        price: 12.34,
        type: 1,
        weight: 1.33,
        length: 1.23,
        width: 1.56,
        height: 0.56,
        bodyTone: 1,
        brightness: 2,
        cut: 4,
        dome: 2,
        origin: 2,
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
