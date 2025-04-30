import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Address from '../../layer1_business/entities/erp/Address';

class AddressModel extends Model <Address> {
  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'customer_id' });
    // this.belongsTo(models.DistrictModel, { foreignKey: 'district_id' });
    return Object.values(models);
  }

}

AddressModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  district_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contact_person: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  address_line_1: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  address_line_2: {
    type: DataTypes.STRING(150),
    allowNull: true,
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
  tableName: '_address',
  timestamps: false
});

export default AddressModel;

