class Bid extends require('sequelize').Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      request_id: {
        type: sequelize.INTEGER
      },
      supplier_id: {
        type: sequelize.INTEGER
      },
      price: {
        type: sequelize.DECIMAL(10,2)
      },
      delivery_time: {
        type: sequelize.INTEGER
      }
    }, {
      tableName: 'bids',
      timestamps: false,
      sequelize
    });
  }
}
Bid.associate = function(models) {
  Bid.belongsTo(models.Request, { foreignKey: 'request_id' });
  Bid.belongsTo(models.Supplier, { foreignKey: 'supplier_id' });
};
module.exports = Bid;

