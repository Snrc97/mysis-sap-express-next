import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Company from '../../layer1_business/entities/erp/Company';


class CompanyModel extends Model <Company> {

  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.AddressModel, { foreignKey: 'address_id' });
  }


}

CompanyModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  tax_number: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  tax_office: {
    type: DataTypes.STRING(100),
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
  tableName: '_company',
  timestamps: false
});

export default CompanyModel;

