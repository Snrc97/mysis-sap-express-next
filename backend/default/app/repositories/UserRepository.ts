import UserModel from '../models/UserModel';
import BaseRepository from './BaseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super();
    this.model = UserModel;
  }
}

const userRepository = new UserRepository();
export default UserRepository;
export { userRepository };
