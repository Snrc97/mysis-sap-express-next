const { BaseRepository } = require('../repositories');
class BaseController {

  static all = [];

  /**
   * @type {BaseRepository}
   */
  repo = null;

  /**
   * @param {BaseRepository} repo
   */
  constructor(repo) {
    BaseController.all.push(this);
    this.repo = repo;
  }

  getAll(req, res) {
    this.repo
      .findAll()
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res
          .status(500)
          .customJson({ success: false, msg: err.message })
      );
  }

  getById(req, res) {
    this.repo
      .findOne(req.params.id)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res
          .status(404)
          .customJson({ success: false, msg: err.message })
      );
  }

  create(req, res) {
    this.repo
      .create(req.body)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res
          .status(400)
          .customJson({ success: false, msg: err.message })
      );
  }

  update(req, res) {
    this.repo
      .update(req.params.id, req.body)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res
          .status(400)
          .customJson({ success: false, msg: err.message })
      );
  }

  delete(req, res) {
    this.repo
      .delete(req.params.id)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res
          .status(404)
          .customJson({ success: false, msg: err.message })
      );
  }
}

module.exports = { BaseController };

