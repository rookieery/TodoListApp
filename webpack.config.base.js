const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const { spawn } = require('child_process');

// Config directories
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const configBase = {
    entry: SRC_DIR + '/index.tsx',
    output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { // 除了node_modules文件夹中的文件，所有的tsx文件都用ts-loader处理
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'ts-loader' }],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: /node_modules/,
                use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }],
            }
        ]
    },
    resolve: {
        alias: {
            '~':  path.resolve(__dirname, './src/'),
        },
        extensions: ['ts', '.tsx', '.js', '.jsx', '.scss', 'css']
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html",
        })
    ],
};
const configDev = {
    ...configBase,
    module: {
        ...configBase.module,
        rules: [
            ...configBase.module.rules,
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: 3001,
        contentBase: OUTPUT_DIR,
        inline: true,
        hot: true,
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
    },
};

module.exports = {
    configDev,
};
