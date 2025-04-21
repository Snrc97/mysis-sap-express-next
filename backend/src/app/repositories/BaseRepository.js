const { FindOptions, DestroyOptions, UpdateOptions } = require('sequelize');
const BaseModel = require('../models/BaseModel');

class BaseRepository {

  static all = [];

  /**
   * @param {BaseModel} model - The model to be used for database operations
   */
  constructor(model) {
    BaseRepository.all.push(this);
    this.model = model;
  }

  /**
   * @param {FindOptions} [options]
   */
  findAll(options) {
    return this.model.findAll(options);
  }

  /**
   * Find a single record by ID
   * @param {number} id
   * @param {FindOptions} [options]
   */
  findOne(id, options) {
    return this.model.findByPk(id, options);
  }

  /**
   * Create a new record
   * @param {Object} data
   */
  create(data) {
    return this.model.create(data);
  }

  /**
   * Update a record
   * @param {number} id
   * @param {Object} data
   * @param {UpdateOptions} [options]
   */
  update(id, data, options) {
    return this.model.update(data, { ...options, where: { id } });
  }

  /**
   * Delete a record
   * @param {number} id
   * @param {DestroyOptions} [options]
   */
  delete(id, options) {
    return this.model.destroy({ ...options, where: { id } });
  }
}

module.exports = BaseRepository;

