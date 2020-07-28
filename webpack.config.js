const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, 'client/src/index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  externals: ['axios'],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
