const path = require('path');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envPath = path.resolve(__dirname, './.env');

/* Initialize .env as soon as posible */
dotenv.config({
  path: envPath,
});

module.exports = {
  target: 'web',
  entry: {
    build: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new Dotenv({
      path: envPath,
    }),
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
    }),
  ],
  resolve: {
    modules: [
      './node_modules',
      './src',
    ],
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
