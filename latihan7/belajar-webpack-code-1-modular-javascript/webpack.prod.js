const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'img/[hash][ext]',
        clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
      })
    ]
});