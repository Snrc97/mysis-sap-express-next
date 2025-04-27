import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Customer from '../../../../layer1_business/entities/erp/Customer';



class CustomerModel extends Model <Customer> {

  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'customer_id' });
  }


}

CustomerModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  tax_number: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  tax_office: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  company_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
  },
  is_franchise: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  credit_limit: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
  current_balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
  discount_rate: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
  min_order_amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  }
},
{
  sequelize,
  tableName: '_customer',
  timestamps: false
});

export default CustomerModel;

