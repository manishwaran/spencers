import { MongoClient } from 'mongodb';

import config from '../../config/default';

export default class MongoDatabase {

  constructor() {
    const authInfo = config.mongodbAuth;
    this.connectionString = `mongodb://${authInfo.dbuser}:${authInfo.dbpassword}@${authInfo.host}:${authInfo.port}/${authInfo.database}`;

    this.getDB = this.getDB.bind(this);
    this.getConnection = this.getConnection.bind(this);
  }

  getDB() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.connectionString, (err, database) => {
        if (err) return reject(err);
        return resolve(database);
      });
    });
  }

  getConnection() {
    return this.getDB()
      .then(db => db)
      .catch(err => err);
  }

}
