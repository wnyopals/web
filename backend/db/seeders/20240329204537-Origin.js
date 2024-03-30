'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Origins', [
      {name: "Lightning Ridge", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Coober Pedy", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Minitable", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Andamooka", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "White Cliffs", description: "", createdAt: new Date(), updatedAt: new Date()},
      {name: "Queensland", description: "", createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Origins', null, {});
  }
};
