import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import User from '../../../../business/entities/erp/User';


class UserModel extends Model<User> {


  static associate(models: any) {
    // Define associations here
    // Example: this.hasMany(models.OrderModel, { foreignKey: 'user_id' });
  }
}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: '_user',
    timestamps: false,
  }
);
export default UserModel;
