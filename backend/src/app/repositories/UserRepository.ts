import UserModel from '../models/UserModel';
import BaseRepository from './BaseRepository';
namespace App.Repositories {
  export class UserRepository extends BaseRepository<typeof UserModel> {
    constructor() {
      super();
    }
  }
}

export default App.Repositories.UserRepository;
