module.exports = (sequelize) => {
  const Payment = sequelize.define('Payment', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_id: {
      type: require('sequelize').INTEGER
    },
    payment_date: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    },
    amount: {
      type: require('sequelize').DECIMAL(15,2)
    }
  }, {
    tableName: 'payments',
    timestamps: false
  });
  return Payment;
};
