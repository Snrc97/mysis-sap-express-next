module.exports = (sequelize) => {
  const InventoryUnit = sequelize.define('InventoryUnit', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    unit_name: {
      type: require('sequelize').STRING
    }
  }, {
    tableName: 'inventory_units',
    timestamps: false
  });
  return InventoryUnit;
};
