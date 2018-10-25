const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 入口文件
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    // babel编译
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    // 输出文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    // webpack-dev-server
    devServer: {
        port: 2333,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
    },
    // 添加热更新
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
