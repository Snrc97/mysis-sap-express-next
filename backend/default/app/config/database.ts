import { Sequelize, Dialect, Model } from 'sequelize';
import * as databaseConfig from './database.config.json' assert { type: 'json' };
import { SequelizeOptions } from 'sequelize-typescript';
import UserModel from '../models/UserModel';
import OrderModel from '../models/OrderModel';
class Database {
  name: string;
  sequelize: Sequelize;
  constructor(name: string, sequelize: Sequelize) {
    this.name = name;
    this.sequelize = sequelize;
  }
}

class DatabaseManager {
  private databases: Database[];

  constructor() {
    this.databases = [];
  }

  add(database: Database) {
    this.databases.push(database);
  }

  get(name: string): Database | undefined {
    return this.databases.find((db) => db.name === name);
  }

  getDefault(): Database | undefined {
    return this.get('default');
  }

  getAll(): Database[] {
    return this.databases;
  }

  getSqu(name: string): Sequelize | undefined {
    const database = this.get(name);
    if (database) {
      return database.sequelize;
    }
    return undefined;
  }

  getDefSqu(): Sequelize | undefined {
    return this.getSqu('default');
  }

  async syncAll() {
    return Promise.all(
      this.databases.map(async (db) => {
        await db.sequelize.sync().then((result) => {
          
          console.log(`✅ ${db.name} DB synced!`);
        });

      })
    );
  }
}

const databaseManager = new DatabaseManager();

databaseConfig.connections.forEach(
  (db) => {
    const sequelizeOptions: SequelizeOptions = {
      database: db.database,
      username: db.username,
      password: db.password,
      dialect: db.dialect as Dialect,
      host: db.host,
      port: db.port,
      logging: false

     
    }
    const database = new Database(
      db.name,
      new Sequelize(sequelizeOptions )
    );
    databaseManager.add(database);
  },
  [databaseManager]
);

const sequelize =
  databaseManager.getDefSqu() ?? new Sequelize('mysql::memory:');

sequelize
  .authenticate()
  .then(() => console.log('✅ DB connected!'))
  .catch((err) => console.error('❌ DB connection error:', err));


export { databaseManager, sequelize };
