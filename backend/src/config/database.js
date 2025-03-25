const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysis_sap', 'mysisroot', 'X(F5hijbi*3e@)(-', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
