let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'map-page.html',
            template: './map-page.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'error-page.html',
            template: './error-page.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'panda.html',
            template: './zoos/panda.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'eagle.html',
            template: './zoos/eagle.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
};

module.exports = conf;