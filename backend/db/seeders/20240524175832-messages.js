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
   await queryInterface.bulkInsert("Messages", [
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      message: "Hi there, just wanted to get some better pictures of the listed item, and what other colors are there? Thanks!",
      userId: null,
      inquiryId: 8,
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
  }
};
