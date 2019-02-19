const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: './lib/js/script.compiled.js',
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'bundle.js',
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: process.env.NODE_ENV,
};
