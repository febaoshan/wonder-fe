const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // 在工程文件中可以省略配置项中扩展名
    resolve: {
        extensions: ['.swam', '.mjs', '.js', '.jsx']
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env', { modules: false })]
                        ],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new BundleAnalyzer()
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