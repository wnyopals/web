'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TransactionStatuses', [
      {name: "Draft", createdAt: new Date(), updatedAt: new Date()},
      {name: "Active", createdAt: new Date(), updatedAt: new Date()},
      {name: "Pending", createdAt: new Date(), updatedAt: new Date()},
      {name: "Sold", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TransactionStatuses", null, {})
  }
};
