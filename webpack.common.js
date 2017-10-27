const path = require('path');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  module: {
      rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.html$/, loader: "html-loader" }
      ]
  },
  output: {
     filename: 'index.bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
};
