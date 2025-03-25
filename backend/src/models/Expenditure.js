module.exports = (sequelize) => {
  const Expenditure = sequelize.define('Expenditure', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    budget_id: {
      type: require('sequelize').INTEGER
    },
    amount: {
      type: require('sequelize').DECIMAL(15,2)
    },
    expenditure_date: {
      type: require('sequelize').DATE,
      defaultValue: require('sequelize').NOW
    }
  }, {
    tableName: 'expenditures',
    timestamps: false
  });
  return Expenditure;
};
