module.exports = (sequelize) => {
  const Bid = sequelize.define('Bid', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    request_id: {
      type: require('sequelize').INTEGER
    },
    supplier_id: {
      type: require('sequelize').INTEGER
    },
    price: {
      type: require('sequelize').DECIMAL(10,2)
    },
    delivery_time: {
      type: require('sequelize').INTEGER
    }
  }, {
    tableName: 'bids',
    timestamps: false
  });
  return Bid;
};
