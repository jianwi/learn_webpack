const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        port: 3000,
        compress: true,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/,
                // use: 'file-loader'
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 3 * 1024,
                        // 输出路径
                        outputPath: 'images',
                        //  保留原图片名字,[] 中的内容会解析
                        name: '[name]-[hash:4].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}