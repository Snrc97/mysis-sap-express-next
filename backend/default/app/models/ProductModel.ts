import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Product from '../../layer1_business/entities/erp/Product';



class ProductModel extends Model <Product> {

  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'product_id' });
    this.belongsTo(models.CategoryModel, { foreignKey: 'category_id' });
    this.belongsTo(models.BrandModel, { foreignKey: 'brand_id' });

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

export default ProductModel;

