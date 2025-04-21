import { FindOptions, DestroyOptions, UpdateOptions } from 'sequelize';
import BaseModel from '../models/BaseModel';

class BaseRepository<T extends BaseModel> {
  /**
   * @param {T} model - The model to be used for database operations
   */
  constructor(readonly model: T) {}

  /**
   * @param {FindOptions<T>} [options]
   */
  async findAll(options?: FindOptions<T>) {
    return this.model.findAll(options);
  }

  /**
   * Find a single record by ID
   * @param {number} id
   * @param {FindOptions<T>} [options]
   */
  async findOne(id: number, options?: FindOptions<T>) {
    return this.model.findByPk(id, options);
  }

  /**
   * Create a new record
   * @param {Partial<T['dataValues']>} data
   */
  async create(data: Partial<T['dataValues']>) {
    return this.model.create(data);
  }

  /**
   * Update a record
   * @param {number} id
   * @param {Partial<T['dataValues']>} data
   * @param {UpdateOptions<T>} [options]
   */
  async update(id: number, data: Partial<T['dataValues']>, options?: UpdateOptions<T>) {
    return this.model.update(data, { ...options, where: { id } });
  }

  /**
   * Delete a record
   * @param {number} id
   * @param {DestroyOptions<T>} [options]
   */
  async delete(id: number, options?: DestroyOptions<T>) {
    return this.model.destroy({ ...options, where: { id } });
  }
}

export default BaseRepository;

