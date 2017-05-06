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

app.get('/expense', expense.get);
app.post('/expense', expense.post);
app.delete('/expense', expense.del);

app.listen(config.serverPort, () => {
  console.log(`listening to port ${config.serverPort}`);
});
