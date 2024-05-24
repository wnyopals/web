'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Inquiries", [
      {
        userId: null,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject",
        listingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        email: "test2@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject two",
        listingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject three",
        listingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject four",
        listingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject five",
        listingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject six",
        listingId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject seven",
        listingId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        email: "test1@test.com",
        phoneNumber: "(716) 760 - 4120",
        subject: "Test Subject eight",
        listingId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Inquiries")
  }
};
