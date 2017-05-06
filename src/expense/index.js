import DBCRUD from '../utils/db-crud';
import config from '../../config/default';
import MongoDatabase from '../utils/mongo-database';

export default class ExpenseHandler {

  constructor() {
    this.crud = new DBCRUD();
    this.db = new MongoDatabase();
    this.post = this.post.bind(this);
    this.collectionName = config.expenseCollectionName;
  }

  post(req, res) {
    const data = req.body;
    this.db.getConnection()
    .then(db => this.crud.save(db.collection(this.collectionName), data))
    .then(() => {
      res.status(200).send('Expense has been added');
    })
    .catch(() => {
      res.status(500).send('Expense is not added');
    });
  }

  get(req, res) {
    res.status(500).end('Not yet implemented');
  }

  del(req, res) {
    res.status(500).end('Not yet implemented');
  }

}
