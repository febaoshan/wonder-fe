let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出路径，需要是绝对路径
    },

    // 开发模式
    mode: 'development',

    // loader配置
    module: {
        // 对某个格式的文件进行转换处理
        rules: [
            {
                test: /\.css$/,
                use:[
                    // use 数组中的 loader 的顺序，是从下到上的（从右到左的逆序）

                    // 将 js 的样式内容插入到 style 标签里
                    "style-loader",
                    // 将 css 文件转换为 js
                    "css-loader",
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                // 图片小于 8kb，base64 处理，减少请求数量，但是会使得体积变大
                options: {
                    limit: 20 * 1024,
                    esModule: false,
                    name: '[hash:5].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    // plugins 插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html'
        })
    ],

    devServer: {
        // 项目构建路径
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        // 启动 gzip 压缩
        // compress: true,
        // 端口号
        port: 3000,
        // 是否自动打开浏览器
        open: true,
    }
}