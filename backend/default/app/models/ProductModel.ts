import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Product from '../../layer1_business/entities/erp/Product';
import CategoryModel from './CategoryModel';
import BrandModel from './BrandModel';



class ProductModel extends Model <Product> {

  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'product_id' });
    this.belongsTo(models.CategoryModel, { foreignKey: 'category_id', as: 'category' });
    this.belongsTo(models.BrandModel, { foreignKey: 'brand_id', as: 'brand' });
    return Object.values(models);
  }


}

ProductModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  brand_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
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
  tableName: '_product',
  timestamps: false
});

ProductModel.associate({ CategoryModel, BrandModel });
export default ProductModel;

