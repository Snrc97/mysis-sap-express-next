import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import Role from '../../layer1_business/entities/auth/Role';

class RoleModel extends Model<Role> {
  static associate(models: any) {
    // Define associations here
    // Example: this.hasMany(models.OrderModel, { foreignKey: 'role_id' });
    return Object.values(models);
  }
}
RoleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    tableName: '_role',
    timestamps: false,
  }
);
export default RoleModel;
