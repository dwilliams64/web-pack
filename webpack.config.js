const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/JS")
    },
    resolve: {
        extensions: [
            ".js"
        ]
    },
    modules: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};