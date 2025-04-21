const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

class Order extends BaseModel {
  constructor(sequelize) {
    super(sequelize, 'Order', {
      bid_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.ENUM('draft','pending','confirmed','processing','shipped','delivered','cancelled','returned'),
        defaultValue: 'pending'
      }
    }, {
      tableName: 'orders',
      timestamps: false
    });
  }
}

module.exports = Order;

