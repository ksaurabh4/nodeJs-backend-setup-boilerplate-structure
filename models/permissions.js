

module.exports = (sequelize, DataTypes) => {
	const Permissions = sequelize.define('Permissions', {
		permissionName: DataTypes.STRING,
	}, {});
	// eslint-disable-next-line func-names
	Permissions.associate = function (models) {
		// associations can be defined here
	};
	return Permissions;
};
