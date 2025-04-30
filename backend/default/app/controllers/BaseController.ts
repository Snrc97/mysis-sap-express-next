class BaseController {
  protected repo: any;
  protected attributes: any = {};
  protected includes: any = {};
  protected viewModels: any;
  protected pluck_columns: string[] = ['name'];

  constructor(repo: any) {
    this.repo = repo;
    this.attributes.pluck = ['id', 'name'];
  }

  async index(req, res) {
    if (req.query.pluck) {
      return await this.pluck(req, res);
    }

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

      .findAll({ include: this.includes.pluck, attributes: ['id', 'name'] })
      .then((data) => res.customJson({ data: data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }
}
export default BaseController;
