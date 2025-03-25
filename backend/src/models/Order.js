module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bid_id: {
      type: require('sequelize').INTEGER
    },
    order_date: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    },
    status: {
      type: require('sequelize').ENUM('Pending', 'Completed', 'Cancelled'),
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'orders',
    timestamps: false
  });
  return Order;
};
