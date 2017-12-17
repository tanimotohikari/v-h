'use strict';
const webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/src/js/app.js',
  },
  output: {
    path: __dirname + '/dist/js/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          plugins: ['transform-runtime'],
          presets: ['env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', 'vuex'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}