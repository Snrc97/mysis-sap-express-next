module.exports = (sequelize) => {
  const DemoRequest = sequelize.define('DemoRequest', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: require('sequelize').INTEGER
    },
    request_date: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    },
    status: {
      type: require('sequelize').ENUM('Pending', 'Approved', 'Rejected'),
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'demo_requests',
    timestamps: false
  });
  return DemoRequest;
};
