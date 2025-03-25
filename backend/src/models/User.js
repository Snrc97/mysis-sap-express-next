module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: require('sequelize').STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: require('sequelize').STRING,
      allowNull: false
    },
    email: {
      type: require('sequelize').STRING,
      allowNull: false,
      unique: true
    },
    role_id: {
      type: require('sequelize').INTEGER
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
  return User;
};
