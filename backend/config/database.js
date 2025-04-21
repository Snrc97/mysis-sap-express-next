const { Sequelize } = require('sequelize');

class Database {
  constructor(name, sequelize) {
    this.name = name;
    this.sequelize = sequelize;
  }
}

class DatabaseManager
{
  constructor() {
    this.databases = [];
  }

  add(database) {
    this.databases.push(database);
  }

  get(name) {
    return this.databases.find((db => db.name === name));
  }

  getDefault() {
    return this.get("default");
  }

  getAll() {
    return this.databases;
  }

  getSqu(name) {
    const database = this.get(name);
    if (database) {
      return database.sequelize;
    }
    return null;
  }

  getDefSqu() {
    return this.getSequalize("default");
  }
}

const databaseManager = new DatabaseManager();
const databaseConfig = require('./database.config.json');
databaseConfig.connections.forEach((db) => {
 const database = new Database(db.name, new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    port: db.port,
    logging: false,
  }));
  databaseManager.add(database);
}, [databaseManager]);
module.exports = { databaseManager };
