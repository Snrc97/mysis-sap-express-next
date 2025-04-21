import { FindOptions, DestroyOptions, UpdateOptions } from 'sequelize';
import BaseModel from '../models/BaseModel';

namespace App.Repositories {
  export class BaseRepository<T extends typeof BaseModel> {
    static all: BaseRepository<any>[] = [];

    private readonly model: T extends typeof BaseModel
      ? InstanceType<T>
      : never;

    constructor() {
      BaseRepository.all.push(this);
    }

    findAll(options?: FindOptions<T['attributes']>) {
      return this.model.findAll(options);
    }

    findOne(id: number, options?: FindOptions<T['attributes']>) {
      return this.model.findByPk(id, options);
    }

    create(data: T['creationAttributes']) {
      return this.model.create(data);
    }

    update(
      id: number,
      data: T['creationAttributes'],
      options?: UpdateOptions<T['attributes']>
    ) {
      return this.model.update(data, { ...options, where: { id } });
    }

    delete(id: number, options?: DestroyOptions) {
      return this.model.destroy({ ...options, where: { id } });
    }
  }
}

export default App.Repositories.BaseRepository;