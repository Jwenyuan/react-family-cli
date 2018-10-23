const path = require('path');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出文件
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
