import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import config from '../config/default';
import ExpenseHandler from './expense';

const app = express();
const expense = new ExpenseHandler();

app.use('/:path', express.static(path.join(__dirname, '/app')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/spencers/expense', expense.get);
app.post('/spencers/expense', expense.post);
app.delete('/spencers/expense', expense.del);

app.listen(config.serverPort, () => {
  console.log(`listening to port ${config.serverPort}`);
});
