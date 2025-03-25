module.exports = (sequelize) => {
  const Equipment = sequelize.define('Equipment', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: require('sequelize').STRING
    },
    serial_number: {
      type: require('sequelize').STRING,
      unique: true
    },
    maintenance_date: {
      type: require('sequelize').DATE
    }
  }, {
    tableName: 'equipments',
    timestamps: false
  });
  return Equipment;
};
