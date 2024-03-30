'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ListingStatuses', [
      {name: "Draft", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Active", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Pending", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Completed", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Archived", description: "", createdAt: new Date(), updatedAt: new Date()},
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
