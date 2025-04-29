import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Item from '../../layer1_business/entities/erp/Item';
import ProductModel from './ProductModel';


class ItemModel extends Model <Item> {

  
  static associate(models: any) {
    // Define associations here
    this.belongsTo(models.ProductModel, { foreignKey: 'product_id', as: 'product' });
    return Object.values(models);
  }


}

ItemModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  serial_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiration_date: {
    type: DataTypes.DATE,
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
  tableName: '_item',
  timestamps: false
});

ItemModel.associate({ ProductModel });
export default ItemModel;

