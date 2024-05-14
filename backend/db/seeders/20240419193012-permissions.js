'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        name: "createListing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "updateListing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "deleteListing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "createAttribute",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "deleteAttribute",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "addPermission",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "removePermission",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "readPermissions",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "adminDashboardRead",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "adminDashboardWrite",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
