const path = require('path');
const webpackMerge = require('webpack-merge');

const base = require('./webpack.base');

const mergedConfig = webpackMerge.merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    https: true,
    open: process.env.OPEN_BROWSER_ON_START === 'true',
    port: process.env.DEV_SERVER_PORT,
    historyApiFallback: {
      index: '/',
    },
    watchOptions: {
      poll: 700,
      ignored: /node_modules|distribution/,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

module.exports = mergedConfig;
