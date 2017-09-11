module.exports = {
    entry: [
      "./src/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.html$/, loader: "html-loader" }
        ]
    },
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
};
