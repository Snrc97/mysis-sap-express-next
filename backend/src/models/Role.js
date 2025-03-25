module.exports = (sequelize) => {
  const Role = sequelize.define('Role', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: require('sequelize').STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'roles',
    timestamps: false
  });
  return Role;
};
