module.exports = (sequelize) => {
  const WebsitePayment = sequelize.define('WebsitePayment', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: require('sequelize').INTEGER
    },
    amount: {
      type: require('sequelize').DECIMAL(15,2)
    },
    payment_date: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    },
    payment_method: {
      type: require('sequelize').STRING
    }
  }, {
    tableName: 'website_payments',
    timestamps: false
  });
  return WebsitePayment;
};
