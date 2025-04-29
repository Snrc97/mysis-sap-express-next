import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Order from '../../layer1_business/entities/erp/Order';
import CustomerModel from './CustomerModel';
import MarketItemModel from './MarketItemModel';

class OrderModel extends Model<Order> {
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'customer_id' });
    this.belongsTo(models.CustomerModel, { foreignKey: 'customer_id' });
    this.belongsTo(models.MarketItemModel, { foreignKey: 'market_item_id' });
    return Object.values(models);
  }
}

OrderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    market_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'pending',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: '_order',
    timestamps: false,
  }
);

OrderModel.associate({ CustomerModel, MarketItemModel });

export default OrderModel;
