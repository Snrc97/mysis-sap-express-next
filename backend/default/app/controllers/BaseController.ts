import BaseRepository from '../repositories/BaseRepository';

class BaseController {
  protected repo: any;
  protected attributes: any = {};
  protected includes: any = {};
  protected viewModels: any;
  protected pluck_column: string = 'name';

  constructor(repo: any) {
    this.repo = repo;
  }

  async index(req, res) {
    
    await this.repo
    
      .findAll({ include: this.includes.index, attributes: this.attributes })
      .then((data) => res.customJson({ data: data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }

  async show(req, res) {
    await this.repo
      .findById(req.params.id)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(404).customJson({ success: false, msg: err.message })
      );
  }

  async store(req, res) {
    await this.repo
      .create(req.body)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(400).customJson({ success: false, msg: err.message })
      );
  }

  async update(req, res) {
    await this.repo
      .update(req.params.id, req.body)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(400).customJson({ success: false, msg: err.message })
      );
  }

  async destroy(req, res) {
    await this.repo
      .delete(req.params.id)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(404).customJson({ success: false, msg: err.message })
      );
  }

  async pluck(req, res) {
    
    await this.repo
    
      .findAll({ include: this.includes.pluck })
      .then((data) => res.customJson({ data: data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }
}
export default BaseController;
