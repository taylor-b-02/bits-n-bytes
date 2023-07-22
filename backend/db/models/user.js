'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING(20),
				allowNull: false,
				validate: {
					len: [4, 30],
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: [60, 60],
				},
			},
			currency: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			lastLogin: {
				type: DataTypes.DATE,
			},
		},
		{
			// Excludes hashedPassword, createdAt, and updatedAt from standard requests d
			defaultScope: {
				attributes: {
					exclude: [
						'hashedPassword',
						'createdAt',
						'updatedAt',
					],
				},
			},
			scopes: {
				// Excludes hashedPassword from requests made within this scope
				currentUser: {
					attributes: {
						exclude: ['hashedPassword'],
					},
				},
				// Neither includes nor excludes attributes - Default behavior
				loginUser: {
					attributes: {},
				},
			},
			sequelize,
			modelName: 'User',
		}
	);

	User.prototype.toSafeObject = function () {
		// This CANNOT be an arrow function
		const { id, username } = this; // context will be the User instance
		return { id, username };
	};

	User.prototype.validatePassword = function (password) {
		return bcrypt.compareSync(
			password,
			this.hashedPassword.toString()
		);
	};

	User.getCurrentUserById = async function (id) {
		return await User.scope('currentUser').findByPk(id);
	};

	User.login = async function ({ credential, password }) {
		const user = await User.scope('loginUser').findOne({
			where: {
				username: credential,
			},
		});
		if (user && user.validatePassword(password)) {
			return await User.scope('currentUser').findByPk(
				user.id
			);
		}
	};

	User.signup = async function ({ username, password }) {
		const hashedPassword = bcrypt.hashSync(password);
		const user = await User.create({
			username,
			hashedPassword,
		});
		return await User.scope('currentUser').findByPk(user.id);
	};

	return User;
};
