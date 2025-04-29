import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import ItemModel from './ItemModel';
import MarketModel from './MarketModel';
import Currency from '../../layer1_business/entities/erp/Currency';


class CurrencyModel extends Model <Currency> {

  
  static associate(models: any) {
    // Define associations here
    // this.belongsTo(models.ItemModel, { foreignKey: 'item_id', as: 'item' });
    return Object.values(models);
  }


}

CurrencyModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CurrencyCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CurrencyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CountryName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Symbol: {
    type: DataTypes.STRING,
    allowNull: true,
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
  tableName: '_market_item',
  timestamps: false
});

export default CurrencyModel;

