const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysis_sap', 'mysisroot', 'X(F5hijbi*3e@)(-', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
