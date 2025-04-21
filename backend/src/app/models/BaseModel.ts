const { Sequelize, DataTypes, Model } = require('sequelize');

class BaseModel extends Model {
  static init(sequelize, features, dataTypes) {
    super.init(dataTypes, {
      sequelize,
      ...features,
    });
  }

  static all = [];

  constructor(sequelize, features, dataTypes) {
    super(dataTypes, {
      sequelize,
      ...features,
    });
  }
}

export default BaseModel;


