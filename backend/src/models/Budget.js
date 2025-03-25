module.exports = (sequelize) => {
  const Budget = sequelize.define('Budget', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    department: {
      type: require('sequelize').STRING
    },
    amount: {
      type: require('sequelize').DECIMAL(15,2)
    },
    fiscal_year: {
      type: require('sequelize').INTEGER
    }
  }, {
    tableName: 'budgets',
    timestamps: false
  });
  return Budget;
};
