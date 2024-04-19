'use strict';
/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Users", [
      {
        password: String(bcrypt.hashSync("Password123!")),
        email: "testabc123@test.com",
        firstName: "Johnny",
        lastName: "Test",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
