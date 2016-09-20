var helpers = require('./config/helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');


var commonConfig = require('./config/webpack.common');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'shim': helpers.root('app/shim.ts'),
        'vendor': helpers.root('app/vendor.ts'),
        'main': helpers.root('app/main.ts')
    },
    output: {
        path: helpers.root('dist')
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'shim'], minChunks: Infinity })
    ]
});
