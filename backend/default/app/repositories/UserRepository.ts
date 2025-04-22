import UserModel from '../models/UserModel';
import BaseRepository from './BaseRepository';
class UserRepository extends BaseRepository {
  constructor() {
    super();
    this.model = UserModel;
  }
}

export default UserRepository;
