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
            //bundling javascript and jsx, also transpiles to ES5
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //bundling css files
            {
                   test: /\.css$/,
                use: [
                  'style-loader',
                   'css-loader',
                 ],
            },
            //bundle images and gifs
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    resolve :
        {
            extensions : ['.js','.jsx', '.png'],
            alias: {
                src: path.resolve(__dirname, 'src'),
            },
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/client', 'index.html'),
            filename: 'index.html'
        })
    ]
}