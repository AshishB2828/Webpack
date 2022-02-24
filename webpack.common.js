const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{ main:"./src/index.js",
            vendor:"./src/vendor.js"
        },
    module: {
        rules: [
        {
            test: /\.scss$/i,
            use: [  "style-loader", //3) inject styles to DOM
                    "css-loader", //2)css => js
                    "sass-loader" //1) scss => css
                ],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(svg|png|jpg|gif)$/i,
            use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath:"imgs"
                    }
                },
        },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }), ],
    
}