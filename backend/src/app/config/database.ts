import { Sequelize } from 'sequelize';

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
}

const databaseManager = new DatabaseManager();
const databaseConfig = require('./database.config.json');
databaseConfig.connections.forEach(
  (db) => {
    const database = new Database(
      db.name,
      new Sequelize(db.database, db.username, db.password, {
        host: db.host,
        dialect: db.dialect,
        port: db.port,
        logging: false,
      })
    );
    databaseManager.add(database);
  },
  [databaseManager]
);
export { databaseManager };
