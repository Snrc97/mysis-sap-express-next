const { sequelize } = require('sequelize');

class BaseModel extends sequelize.Model {
  static all = [];

  constructor(features, dataTypes) {
    BaseModel.all.push(this);
    super();

    this.init(dataTypes, {
      sequelize,
      ...features,
    });
  }
}

module.exports = BaseModel;
