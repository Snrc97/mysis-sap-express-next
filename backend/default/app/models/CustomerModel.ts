import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Customer from '../../layer1_business/entities/erp/Customer';
import AddressModel from './AddressModel';

class CustomerModel extends Model <Customer> {
  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'customer_id' });
    this.belongsTo(models.AddressModel, { foreignKey: 'address_id' });
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
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},
{
  sequelize,
  tableName: '_customer',
  timestamps: false
});

CustomerModel.associate({ AddressModel });
export default CustomerModel;

