'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      {name: "Pinfire", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Flagstone", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Harlequin", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Chaff", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Floral", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Broadflash", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Moss", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Ribbon", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Cloverleaf", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Palatte", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Asteria", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Picture Stone", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Flagstone", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Straw", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Script", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Mackerel", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Flame", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Patterns', null, {});
  }
};
