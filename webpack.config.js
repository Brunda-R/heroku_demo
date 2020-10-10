const path = require('path');

var config = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        publicPath:"/",
        contentBase:"./public",
        port:3000
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],


    }
}
module.exports = config;