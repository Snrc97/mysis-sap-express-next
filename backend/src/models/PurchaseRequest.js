module.exports = (sequelize) => {
  const PurchaseRequest = sequelize.define('PurchaseRequest', {
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
    },
    description: {
      type: require('sequelize').TEXT
    }
  }, {
    tableName: 'purchase_requests',
    timestamps: false
  });
  return PurchaseRequest;
};
