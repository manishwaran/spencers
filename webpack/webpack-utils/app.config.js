const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  bail: true,
  entry: {
    vendorbase: [
      'react',
      'react-dom',
      'mobx',
      'mobx-react',
      'react-router',
      'react-tap-event-plugin',
      'material-ui',
      'isomorphic-fetch',
    ],
    vendorAddon: [
      'react-ace',
      'react-addons-css-transition-group',
      'react-keydown',
    ],
    index: './app/index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  target: 'web',
  output: {
    path: 'dist/app',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css', 'sass'],
        }),
      },
      { test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000',
      },
      { test: /\.(ttf|eot|gif|png)$/,
        loader: 'file',
      },
      { test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spencers',
      template: 'webpack/webpack-utils/template.ejs',
      inject: true,
      links: ['style.css'],
    }),
    // Bootstrap4 plugins
    new webpack.ProvidePlugin({
      $: 'jquery',
      Tether: 'tether',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.Tether': 'tether',
    }),

    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),

    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'index',
      chunks: ['vendorbase', 'vendorAddon', 'index'],
    }),
  ],

};
