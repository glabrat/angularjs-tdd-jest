const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports =(common, {
    devtool: "eval-source-map",
    devServer: {
        filename: "index.bundle.js",
        contentBase: "./src",
        port: 3000,
        publicPath: "/",
        stats: {
            colors: true
        }
    }
});
