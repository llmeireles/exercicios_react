const webpack = require('webpack')
//const ExtractTextPlugin =  require('extract-text-webpack-plugin') //plugin para o webpack carregar o css)

module.exports = {
    // Todas as configurações do projeto
    entry:'./ex/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    /*plugins: [
        new ExtractTextPlugin('app.css')
    ],*/
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        }/*,{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
            
        }*/]
    }

}