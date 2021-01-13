const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
}

module.exports = conf;