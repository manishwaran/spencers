const AppConfig = require('./webpack-utils/app.config');
const ServerConfig = require('./webpack-utils/server.config');

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
module.exports = [AppConfig, ServerConfig];
