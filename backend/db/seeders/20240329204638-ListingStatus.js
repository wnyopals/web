'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ListingStatuses', [
      {name: "Draft", createdAt: new Date(), updatedAt: new Date()},
      {name: "Active", createdAt: new Date(), updatedAt: new Date()},
      {name: "Pending", createdAt: new Date(), updatedAt: new Date()},
      {name: "Completed", createdAt: new Date(), updatedAt: new Date()},
      {name: "Archived", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('ListingStatuses', null, {});
  }
};
