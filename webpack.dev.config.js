const path = require('path');

module.exports = {
    // 入口文件
    entry: path.join(__dirname, 'src/index.js'),
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
        filename: 'bundle.js'
    },
    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        // compress: true,
        port: 8888
    }
};
