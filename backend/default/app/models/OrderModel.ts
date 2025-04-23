import { DataTypes, Model, Sequelize } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';

export interface OrderEntity {

  id: number;
  order_number: number;
  customer_id: number;
  order_date?: Date;
  status?: string;
  total_amount?: number;
  discount_amount?: number;
  tax_amount?: number;
  shipping_amount?: number;
  grand_total?: number;
  shipping_address_id: number;
  billing_address_id: number;
  payment_method: string;
  payment_status?: string;
  notes?: string;
}

class OrderModel extends Model <OrderEntity> {

  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'customer_id' });
  }


}

OrderModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    defaultValue: 0,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
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
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  discount_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  tax_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  shipping_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  grand_total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  shipping_address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  billing_address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "cash",
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded'),
    defaultValue: 'pending',
  },
  notes: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
},
{
  sequelize,
  tableName: '_order',
  timestamps: true
});

export default OrderModel;

