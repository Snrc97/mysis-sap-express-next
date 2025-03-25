module.exports = (sequelize) => {
  const Branch = sequelize.define('Branch', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: require('sequelize').STRING
    },
    location: {
      type: require('sequelize').STRING
    }
  }, {
    tableName: 'branches',
    timestamps: false
  });
  return Branch;
};
