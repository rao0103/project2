const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename:'main.[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ],
            },
        ],
    },
    mode: process.env.NODE_ENV,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    externals: {
        jquery: 'jQuery',
        lodash: '_',
    },
    devServer: {
        open: true,
        // 配置前端请求代理
        proxy: {
            // 在开发环境下代理的目标是'http://127.0.0.1:3000'
            // 在生产环境下代理的目标是'http://api.cc0820.top:3000'
            '^/api': {
                target:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:3000'
                        : process.env.NODE_ENV === 'production'
                            ? 'http://api.cc0820.top:3000'
                            : '',
                pathRewrite: { '/api': '' },
            },
            '^/api1': {
                target: 'http://127.0.0.1:3001',
                pathRewrite: { '/api1': '' },
            },
        },
        client: {
            overlay: false,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'main.[contenthash:8].css'
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
            title1234: '1234',
            cdn: {
                script: [
                    'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js',
                    'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',
                ],
                style: [],
            },
        }),
    ],
};
// CDN(内容分发网络Content Deliver Network)
// 内容分发网络由若干服务器节点构成
// 全球都会部署服务器
