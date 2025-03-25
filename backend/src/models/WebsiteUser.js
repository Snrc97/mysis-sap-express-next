module.exports = (sequelize) => {
  const WebsiteUser = sequelize.define('WebsiteUser', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: require('sequelize').STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: require('sequelize').STRING,
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: require('sequelize').STRING,
      allowNull: false
    }
  }, {
    tableName: 'website_users',
    timestamps: false
  });
  return WebsiteUser;
};
