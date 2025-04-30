import { DataTypes, Model } from 'sequelize';
import { databaseManager, sequelize } from '../config/database';
import User from '../../layer1_business/entities/auth/User';
import RoleModel from './RoleModel';
import CustomerModel from './CustomerModel';

class UserModel extends Model<User> {
  static associate(models: any) {
    // Define associations here
    // Example: this.hasMany(models.OrderModel, { foreignKey: 'user_id' });
    
    return Object.values(models);
  }
}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
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
    tableName: '_user',
    timestamps: false,
  }
);

UserModel.associate({ RoleModel, CustomerModel });
UserModel.belongsTo(RoleModel, { foreignKey: 'role_id', as: 'role' });


export default UserModel;
