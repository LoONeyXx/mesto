const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/scripts/index.js',
    devtool:'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname,'./src'),
        port: 8080,
        compress: true,
        hot: true,
        open:true

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, {loader:'css-loader', options: { importLoaders: 1}}, 'postcss-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssExtractPlugin()
    ]
}