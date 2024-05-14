'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert("PermissionsUserJoins", [
    {
      permissionId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      permissionId: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      permissionId: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      permissionId: 4,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PermissionsUserJoins', null, {});
  }
};
