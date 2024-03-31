'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cuts', [
      {name: "Circle", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Oval", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Heart", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Crescent", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Triangular", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Square Cushion", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Rectangular Cushion", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Freeform", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Marquise", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Drop", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Trilion", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Other Shape", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cuts', null, {})
  }
};
