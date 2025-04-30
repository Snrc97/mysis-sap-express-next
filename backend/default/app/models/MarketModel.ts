import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Market from '../../layer1_business/entities/erp/Market';
import CompanyModel from './CompanyModel';


class MarketModel extends Model <Market> {

  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.CompanyModel, { foreignKey: 'company_id' });
    return Object.values(models);
  }


}

MarketModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(250),
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
  tableName: '_market',
  timestamps: false
});
MarketModel.associate({ CompanyModel });
export default MarketModel;

