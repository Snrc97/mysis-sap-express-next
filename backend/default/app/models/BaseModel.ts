import { Model, Sequelize } from 'sequelize';
class BaseModel extends Model {

  constructor(sequelize : Sequelize | undefined, features, dataTypes) {
    super(dataTypes, {
      sequelize,
      ...features,
    });
  }
}

export default BaseModel;
