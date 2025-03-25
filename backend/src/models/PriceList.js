module.exports = (sequelize) => {
  const PriceList = sequelize.define('PriceList', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    supplier_id: {
      type: require('sequelize').INTEGER
    },
    product_name: {
      type: require('sequelize').STRING
    },
    price: {
      type: require('sequelize').DECIMAL(10,2)
    }
  }, {
    tableName: 'price_lists',
    timestamps: false
  });
  return PriceList;
};
