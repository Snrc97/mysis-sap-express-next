import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import MarketItem from '../../layer1_business/entities/erp/MarketItem';


class MarketItemModel extends Model <MarketItem> {

  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.MarketModel, { foreignKey: 'market_id' });
    this.belongsTo(models.ItemModel, { foreignKey: 'item_id' });
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

export default MarketItemModel;

