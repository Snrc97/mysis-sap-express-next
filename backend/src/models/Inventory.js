module.exports = (sequelize) => {
  const Inventory = sequelize.define('Inventory', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: require('sequelize').STRING
    },
    quantity: {
      type: require('sequelize').INTEGER
    },
    warehouse_location: {
      type: require('sequelize').STRING
    }
  }, {
    tableName: 'inventory',
    timestamps: false
  });
  return Inventory;
};
