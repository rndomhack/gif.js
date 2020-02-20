const path = require("path");

const gif =  {
    mode: "production",
    entry: {
        "gif" : "./src/gif.coffee"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "GIF",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: "coffee-loader"
            }
        ]
    },
    devtool: "source-map"
};

const gif_worker =  {
    mode: "production",
    entry: {
        "gif.worker" :"./src/gif.worker.coffee"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: "coffee-loader"
            }
        ]
    },
    devtool: "source-map"
};

module.exports = [gif, gif_worker];