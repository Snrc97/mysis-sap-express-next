import BaseModel from '../models/BaseModel';
import BaseRepository from '../repositories/BaseRepository';

namespace App.Controllers {
  export class BaseController {
    static all : BaseController[] = [];

   
    repo : BaseRepository<typeof BaseModel> | undefined;

    /**
     * @param {BaseRepository} repo
     */
    constructor(repo : BaseRepository<typeof BaseModel> | undefined) {
      BaseController.all.push(this);
      this.repo = repo;
    }

    index(req, res) {
      this.repo?.findAll()
        .then((data) => res.customJson({ data }))
        .catch((err) =>
          res.status(500).customJson({ success: false, msg: err.message })
        );
    }

    show(req, res) {
      this.repo?.findOne(req.params.id)
        .then((data) => res.customJson({ data }))
        .catch((err) =>
          res.status(404).customJson({ success: false, msg: err.message })
        );
    }

    store(req, res) {
      this.repo?.create(req.body)
        .then((data) => res.customJson({ data }))
        .catch((err) =>
          res.status(400).customJson({ success: false, msg: err.message })
        );
    }

    update(req, res) {
      this.repo?.update(req.params.id, req.body)
        .then((data) => res.customJson({ data }))
        .catch((err) =>
          res.status(400).customJson({ success: false, msg: err.message })
        );
    }

    destroy(req, res) {
      this.repo?.delete(req.params.id)
        .then((data) => res.customJson({ data }))
        .catch((err) =>
          res.status(404).customJson({ success: false, msg: err.message })
        );
    }
  }
}
export default App.Controllers.BaseController;
