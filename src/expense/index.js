import DBCRUD from '../utils/db-crud';
import config from '../../config/default';
import MongoDatabase from '../utils/mongo-database';

export default class ExpenseHandler {

  constructor() {
    this.crud = new DBCRUD();
    this.db = new MongoDatabase();
    this.get = this.get.bind(this);
    this.del = this.del.bind(this);
    this.post = this.post.bind(this);
    this.collectionName = config.expenseCollectionName;
  }

  post(req, res) {
    const data = req.body;
    this.db.getConnection()
    .then(db => this.crud.save(db.collection(this.collectionName), data))
    .then(() => res.status(200).send(JSON.stringify({ message: 'Expense has been added' })))
    .catch(() => res.status(500).send(JSON.stringify({ message: 'Expense is not added' })));
  }

  get(req, res) {
    const id = req.query.id;
    const filters = {};
    if (id && typeof id === 'string') {
      filters.$where = `this._id == '${id}'`;
    }
    this.db.getConnection()
    .then(db => this.crud.read(db.collection(this.collectionName), filters))
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'All data fetched' })))
    .catch(() => res.status(500).send({ message: 'Error in getting data' }));
  }

  del(req, res) {
    const id = req.query.id;
    if (!id || typeof id !== 'string') {
      res.status(500).end({ message: 'Type of id should be string.' });
      return;
    }
    this.db.getConnection()
    .then(db => this.crud.remove(db.collection(this.collectionName)))
    .then(() => res.status(200).send(JSON.stringify({ message: 'Succefully deleted' })))
    .catch(() => res.status(500).send({ message: 'Error in deleting entry' }));
  }

}
