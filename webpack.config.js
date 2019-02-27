// Imports: Dependencies
const path = require('path');
const dotenv = require('dotenv');
require("@babel/register");

// Load environment variables.
dotenv.config();

// Webpack Configuration
const config = {
  entry: './src/cards.js',
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  // Plugins
  plugins: [],
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
};
// Exports
module.exports = config;