"use strict";

var path = require('path');

module.exports = {
    devtool: "source-map",
    context: __dirname + "/Scripts/App",
    entry: './index.ts',
    output: {
        filename: "index.js",
        path: __dirname + '/Build/',
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "source-map-loader",
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
};