const { sequelize, Sequelize } = require('sequelize');

class BaseModel extends Sequelize.Model {
  static all = [];

  constructor(features, dataTypes) {
    super();
    BaseModel.all.push(this);

    this.init(dataTypes, {
      sequelize,
      ...features,
    });
  }
}

module.exports = BaseModel;
