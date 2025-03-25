module.exports = (sequelize) => {
  const ProductComponent = sequelize.define('ProductComponent', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_id: {
      type: require('sequelize').INTEGER
    },
    component_name: {
      type: require('sequelize').STRING
    },
    quantity: {
      type: require('sequelize').INTEGER
    }
  }, {
    tableName: 'product_components',
    timestamps: false
  });
  return ProductComponent;
};
