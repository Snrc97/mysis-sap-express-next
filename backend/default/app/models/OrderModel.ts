import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Order from '../../layer1_business/entities/erp/Order';


class OrderModel extends Model <Order> {

  
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
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  product_id: {
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
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
{
  sequelize,
  tableName: '_order',
  timestamps: false
});

export default OrderModel;

