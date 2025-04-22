import { Sequelize, DataTypes } from 'sequelize';
import BaseModel from './BaseModel';
import { databaseManager } from '../config/database';

class UserModel extends BaseModel {

  // Define the model attributes
  id: number;
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_active: boolean;
  last_login: Date;

  static table_name = '_user';

  constructor() {
    super(
      databaseManager.getDefSqu(),
      {
        tableName: UserModel.table_name,
        timestamps: false,
      },
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          field: 'username',
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          field: 'email',
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'password',
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'first_name',
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'last_name',
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'phone',
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          field: 'is_active',
        },
        last_login: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'last_login',
        },
      }
    );
  }
}

export default UserModel;
