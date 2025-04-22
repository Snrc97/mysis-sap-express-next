import BaseModel from '../models/BaseModel';
import BaseRepository from '../repositories/BaseRepository';

class BaseController<T extends BaseModel> {
  protected repo: BaseRepository<T> | undefined;

  constructor() {
  }

  async index(req, res) {
    await this.repo
      ?.findAll()
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }

  async show(req, res) {
    await this.repo
      ?.findOne(req.params.id)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(404).customJson({ success: false, msg: err.message })
      );
  }

  async store(req, res) {
    await this.repo
      ?.create(req.body)
      ?.then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(400).customJson({ success: false, msg: err.message })
      );
  }

  async update(req, res) {
    await this.repo
      ?.update(req.params.id, req.body)
      ?.then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(400).customJson({ success: false, msg: err.message })
      );
  }

  async destroy(req, res) {
    await this.repo
      ?.delete(req.params.id)
      ?.then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(404).customJson({ success: false, msg: err.message })
      );
  }
}
export default BaseController;
