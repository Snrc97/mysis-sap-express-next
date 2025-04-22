import { FindOptions, DestroyOptions, UpdateOptions } from 'sequelize';

class BaseRepository {

  protected model : any;

  constructor() {
  }

  async findAll(options?: FindOptions<typeof this.model>) {
    return await this.model?.get(options);
  }

  async findOne(id: number, options?: FindOptions<typeof this.model>) {
    if(options)
    {
      options.where = { ...options.where, id: id } as any;
    }
    return await this.model?.get((options))
  }

  async create(data: any) {
    return await this.model?.save(data);
  }

  async update(
    id: number,
    data: typeof this.model,
    options?: UpdateOptions<typeof this.model>
  ) {
    return await this.model?.update(data, { ...options, where: { id } });
  }

  async delete(id: number, options?: DestroyOptions) {
    const optionsCombined = {
      ...options,
      where: { id },
    };
    return await this.model?.destroy(optionsCombined);
  }
}

export default BaseRepository;
