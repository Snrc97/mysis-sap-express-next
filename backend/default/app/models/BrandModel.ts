import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Brand from '../../layer1_business/entities/erp/Brand';



class BrandModel extends Model <Brand> {

  
  static associate(models: any) {
    // Define associations here
    // Example: this.belongsTo(models.UserModel, { foreignKey: 'brand_id' });
    return Object.values(models);
  }


}

BrandModel.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  content: {
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
  tableName: '_brand',
  timestamps: false
});

export default BrandModel;

