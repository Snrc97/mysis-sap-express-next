import {
  FindOptions,
  DestroyOptions,
  UpdateOptions,
} from 'sequelize';

class BaseRepository {
  protected model: any;

  constructor() {}

  async findAll(options?: FindOptions<typeof this.model>) {
    return await this.model.findAll(options);
  }

  async findById(id: number, options?: FindOptions<typeof this.model>) {
    return await this.model.findOne({ ...options, where: { id } });
  }

  async create(data: any) {
    return await this.model.create(data);
  }

  async update(
    id: number,
    data: Partial<typeof this.model>,
    options?: UpdateOptions<typeof this.model>
  ) {
    return await this.model.update(data, { ...options, where: { id } });
  }

  async delete(id: number, options?: DestroyOptions) {
    return await this.model.destroy({ ...options, where: { id } });
  }
}

export default BaseRepository;
