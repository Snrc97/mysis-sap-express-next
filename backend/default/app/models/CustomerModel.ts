import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Customer from '../../layer1_business/entities/erp/Customer';
import AddressModel from './AddressModel';
import UserModel from './UserModel';

class CustomerModel extends Model <Customer> {
  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.AddressModel, { foreignKey: 'address_id', as: 'address' });
    this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'user' });
    return Object.values(models);
  }

}

CustomerModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
},
{
  sequelize,
  tableName: '_customer',
  timestamps: false
});

CustomerModel.associate({ AddressModel, UserModel });
export default CustomerModel;

