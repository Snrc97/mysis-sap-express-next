const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    const model = require('../models/UserModel');
    super(model);
  }


}

const repository = new UserRepository();

module.exports = { repository };
