import UserModel from '../models/UserModel';

const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository<typeof UserModel> {
  constructor() {
    super();
  }


}

export default UserRepository;
