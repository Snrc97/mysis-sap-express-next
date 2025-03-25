module.exports = (sequelize) => {
  const ProductRecipe = sequelize.define('ProductRecipe', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: require('sequelize').STRING
    },
    description: {
      type: require('sequelize').TEXT
    }
  }, {
    tableName: 'product_recipes',
    timestamps: false
  });
  return ProductRecipe;
};
