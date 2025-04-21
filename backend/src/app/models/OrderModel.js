const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

class OrderModel extends BaseModel {
  constructor() {
    super({
      tableName: '_order',
      timestamps: false
    },{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_id: {
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
      },
      total_amount: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
      },
      discount_amount: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
      },
      tax_amount: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
      },
      shipping_amount: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
      },
      grand_total: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
      },
      shipping_address_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      billing_address_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false
      },
      payment_status: {
        type: DataTypes.ENUM('pending','paid','failed', 'refunded'),
        defaultValue: 'pending'
      },
      notes: {
        type: DataTypes.TEXT
      },
    });
  }
}

const model = new OrderModel();
module.exports = { model };
