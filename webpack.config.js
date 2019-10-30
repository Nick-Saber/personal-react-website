const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {

    entry: path.resolve(__dirname, "src/client/pages/homePage.jsx"), //relative to root of the application
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, "public") //relative to root of the application
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template:path.resolve(__dirname, 'src/client/index.html')
        })
    ]

}