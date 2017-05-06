export default class DBCRUD {

  constructor() {
    this.save = this.save.bind(this);
    this.read = this.read.bind(this);
    this.find = this.find.bind(this);
  }

  save(db, collectionName, data) {
    return new Promise((resolve, reject) => {
      db.collection(collectionName).save(data, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  find(db, collectionName, filters, fields = {}) {
    return new Promise((resolve, reject) => {
      db.collection(collectionName).find(filters, fields, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  read(db, collectionName, filters = {}, fields = {}) {
    return this.find(db, collectionName, filters, fields)
      .then(response => response.toArray())
      .then(data => data)
      .catch(err => err);
  }

}
