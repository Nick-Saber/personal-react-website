const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {

    entry: path.resolve(__dirname, "src/client/components/index.jsx"), //relative to root of the application
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, "public") //relative to root of the application
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve :
        {
            extensions : ['.js','.jsx']
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/client', 'index.html'),
            filename: 'index.html'
        })
    ]
}