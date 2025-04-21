import { Sequelize, DataTypes } from 'sequelize';
import BaseModel from './BaseModel';

namespace App.Models {

  export class UserModel extends BaseModel {
    constructor() {
      super(
        new Sequelize('mysql::memory:'),
        {
          tableName: '_user',
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


}

export default App.Models.UserModel;
