import { ObjectId } from 'mongodb';

export default class DBCRUD {

  constructor() {
    this.save = this.save.bind(this);
    this.read = this.read.bind(this);
    this.find = this.find.bind(this);
  }

  save(collection, data) {
    return new Promise((resolve, reject) => {
      collection.save(data, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  find(collection, filters, fields = {}) {
    return new Promise((resolve, reject) => {
      collection.find(filters, fields, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  read(collection, filters = {}, fields = {}) {
    return this.find(collection, filters, fields)
      .then(response => response.toArray())
      .then(data => data)
      .catch(err => err);
  }

  remove(collection, filters = {}) {
    return new Promise((resolve, reject) => {
      collection.remove(filters, filters, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

}
