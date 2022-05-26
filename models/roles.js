

module.exports = (sequelize, DataTypes) => {
	const Roles = sequelize.define('Roles', {
		roleName: DataTypes.STRING,
	}, {});
	// eslint-disable-next-line func-names
	Roles.associate = function (models) {
		// associations can be defined here
	};
	return Roles;
};
