module.exports = (sequelize) => {
  const Currency = sequelize.define('Currency', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    currency_code: {
      type: require('sequelize').STRING
    },
    exchange_rate: {
      type: require('sequelize').DECIMAL(10,4)
    }
  }, {
    tableName: 'currencies',
    timestamps: false
  });
  return Currency;
};
