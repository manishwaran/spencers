import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import config from '../config/default';
import ExpenseStats from './stats';
import ExpenseHandler from './expense';

const app = express();
const stats = new ExpenseStats();
const expense = new ExpenseHandler();

app.use('/:path', express.static(path.join(__dirname, '/app')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/spencers/expense', expense.get);
app.post('/spencers/expense', expense.post);
app.delete('/spencers/expense', expense.del);

app.get('/spencers/categories', stats.getDistintCategory);

app.get('/spencers/stats/daily', stats.getDailyStats);
app.get('/spencers/stats/monthly', stats.getMonthlyStats);
app.get('/spencers/stats/weekly', stats.getWeeklyStats);

app.listen(config.serverPort, () => {
  console.log(`listening to port ${config.serverPort}`);
});
