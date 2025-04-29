import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import MarketItem from '../../layer1_business/entities/erp/MarketItem';
import ItemModel from './ItemModel';
import MarketModel from './MarketModel';


class MarketItemModel extends Model <MarketItem> {

  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.MarketModel, { foreignKey: 'market_id', as: 'market' });
    this.belongsTo(models.ItemModel, { foreignKey: 'item_id', as: 'item' });
    return Object.values(models);
  }


}

MarketItemModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  market_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currency_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
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

MarketItemModel.associate({ MarketModel, ItemModel });
export default MarketItemModel;

