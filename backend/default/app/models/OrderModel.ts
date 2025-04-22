import { DataTypes, Sequelize } from 'sequelize';
import BaseModel from './BaseModel';
import { databaseManager } from '../config/database';

class OrderModel extends BaseModel {
  constructor() {
    super(
      databaseManager.getDefSqu(),
      {
        tableName: '_order',
        timestamps: false,
      },
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        order_number: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'order_number',
        },
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'customer_id',
        },
        order_date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'order_date',
        },
        status: {
          type: DataTypes.ENUM(
            'draft',
            'pending',
            'confirmed',
            'processing',
            'shipped',
            'delivered',
            'cancelled',
            'returned'
          ),
          defaultValue: 'pending',
          field: 'status',
        },
        total_amount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0,
          field: 'total_amount',
        },
        discount_amount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0,
          field: 'discount_amount',
        },
        tax_amount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0,
          field: 'tax_amount',
        },
        shipping_amount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0,
          field: 'shipping_amount',
        },
        grand_total: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0,
          field: 'grand_total',
        },
        shipping_address_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'shipping_address_id',
        },
        billing_address_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'billing_address_id',
        },
        payment_method: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'payment_method',
        },
        payment_status: {
          type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded'),
          defaultValue: 'pending',
          field: 'payment_status',
        },
        notes: {
          type: DataTypes.TEXT,
          field: 'notes',
        },
      }
    );
  }
}

export default OrderModel;
