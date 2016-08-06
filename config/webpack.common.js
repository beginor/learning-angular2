var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.js.map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        root: [helpers.root('app')],
        extensions: ['', '.ts', '.js']
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }
};