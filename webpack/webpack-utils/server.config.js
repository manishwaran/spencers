const webpack = require('webpack');
const fs = require('fs');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  entry: {
    server: './src/index.js',
  },
  target: 'node',
  output: {
    path: 'dist',
    filename: 'index.js',
    library: 'taggerv2',
    libraryTarget: 'commonjs2',
  },
  node: {
    __dirname: false,
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  externals: nodeModules,
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
};
