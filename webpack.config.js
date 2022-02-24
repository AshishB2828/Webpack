const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"main.js",
        path: path.resolve(__dirname, "dist")
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
        ],
    },
    
}