const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  bail: true,
  entry: {
    vendorbase: [
      'bootstrap-loader',
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
      Tooltip: 'exports?Tooltip!bootstrap/js/dist/tooltip',
      Alert: 'exports?Alert!bootstrap/js/dist/alert',
      Button: 'exports?Button!bootstrap/js/dist/button',
      Carousel: 'exports?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports?Modal!bootstrap/js/dist/modal',
      Popover: 'exports?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports?Tab!bootstrap/js/dist/tab',
      Util: 'exports?Util!bootstrap/js/dist/util',
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
