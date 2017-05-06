import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import config from '../config/default';

const app = express();

app.use('/:path', express.static(path.join(__dirname, '/app')));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(config.serverPort, () => {
  console.log(`listening to port ${config.serverPort}`);
});
