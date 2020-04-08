const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path')

//package.json uses the --config  src/webpack.config.js flag for npx webpack thats because it should
//reference config file so that webpack paths are relative to the src directory


module.exports = {
    devtool: 'eval-source-map',
    //where to start searching
    entry: path.resolve(__dirname, "client/components/index.jsx"), //relative to root of the application src folder,
    //where to store the bundle output
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname,'..', "public") //relative to root of the application src folder
    },
    module: {

        //tells webpack what to bundle and using what loader
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
    //change how modules are resolved
    resolve :
        {
            //resolve module imports looking for extensions in this order
            extensions : ['.js','.jsx', '.png'],
            //alias src to the directory this webpack config is in
            alias: {
                src: path.resolve(__dirname),
            },
        },
    plugins: [
        //links the bundle to an html template in the output
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'index.html'),
            filename: 'index.html'
        })
    ],
    //uglify to reduce bundle size
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
}