const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
        {
            test: /\.scss$/i,
            use: [  "style-loader", //3) inject styles to DOM
                    "css-loader", //2)css => js
                    "sass-loader" //1) scss => css
                ],
        },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }), ],
    
}