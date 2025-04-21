
const { DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {
  constructor() {
    super(
      {
        tableName: '_user',
        timestamps: false
      }
      ,
      {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
  }
}

const model = new UserModel();
module.exports = { model };


