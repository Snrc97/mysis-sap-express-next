module.exports = (sequelize) => {
  const Supplier = sequelize.define('Supplier', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: require('sequelize').STRING
    },
    contact_info: {
      type: require('sequelize').TEXT
    }
  }, {
    tableName: 'suppliers',
    timestamps: false
  });
  return Supplier;
};
