import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Category from '../../layer1_business/entities/erp/Category';

class CategoryModel extends Model<Category> {
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'category_id' });
    this.belongsTo(models.CategoryModel, { foreignKey: 'parent_id', as: 'parent' });
    return Object.values(models);
  }
}

CategoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        model: CategoryModel,
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING(75),
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
    tableName: '_category',
    timestamps: false,
  }
);

CategoryModel.associate({CategoryModel});
export default CategoryModel;
