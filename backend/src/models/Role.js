const { sequelize, DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

class Role extends BaseModel {
  constructor(sequelize) {
    super(sequelize, 'Role', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'roles',
      timestamps: false
    });
  }
}
const role = new Role(sequelize);
module.exports = { role };

