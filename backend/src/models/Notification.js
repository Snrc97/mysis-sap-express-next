module.exports = (sequelize) => {
  const Notification = sequelize.define('Notification', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: require('sequelize').INTEGER
    },
    message: {
      type: require('sequelize').TEXT
    },
    created_at: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    }
  }, {
    tableName: 'notifications',
    timestamps: false
  });
  return Notification;
};
