'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					username: 'Demo-lition',
					hashedPassword:
						bcrypt.hashSync('password'),
				},
				{
					username: 'FakeUser1',
					hashedPassword: bcrypt.hashSync(
						faker.internet.password()
					),
				},
				{
					username: 'FakeUser2',
					hashedPassword: bcrypt.hashSync(
						faker.internet.password()
					),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		const Op = Sequelize.Op;
		await queryInterface.bulkDelete(
			'Users',
			{
				username: {
					[Op.in]: [
						'Demo-lition',
						'FakeUser1',
						'FakeUser2',
					],
				},
			},
			{}
		);
	},
};
