import { FindOptions, DestroyOptions, UpdateOptions } from 'sequelize';
import BaseModel from '../models/BaseModel';

class BaseRepository<T extends BaseModel> {

  protected model: T | undefined;

  constructor() {
  }

  findAll(options?: FindOptions<T>) {
    return this.model?.get(options);
  }

  findOne(id: number, options?: FindOptions<T>) {
    if(options)
    {
      options.where = { ...options.where, id: id } as any;
    }
    return this.model?.get((options))
  }

  create(data: any) {
    return this.model?.save(data);
  }

  update(
    id: number,
    data: T,
    options?: UpdateOptions<T>
  ) {
    return this.model?.update(data, { ...options, where: { id } });
  }

  delete(id: number, options?: DestroyOptions) {
    const optionsCombined = {
      ...options,
      where: { id },
    };
    return this.model?.destroy(optionsCombined);
  }
}

export default BaseRepository;
