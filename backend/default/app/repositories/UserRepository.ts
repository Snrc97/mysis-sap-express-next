import UserModel from '../models/UserModel';
import BaseRepository from './BaseRepository';
class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super();
    this.model = new UserModel();
  }
}

export default UserRepository;
