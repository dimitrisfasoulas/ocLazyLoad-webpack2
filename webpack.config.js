const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
process.traceDeprecation = true;

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc',
                    failOnWarning: false,
                    failOnError: false
                }
            },
            {
                test: /\.tpl.html$/,
                use: [
                    'ngtemplate-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', { modules: false }]],
                            plugins: [['angularjs-annotate', { 'explicitOnly': true }], 'syntax-dynamic-import']
                        }
                    }
                ]
            }
        ]
    },
    entry: path.join(__dirname, 'app.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: `app.js`,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.pug'],
        mainFields: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
        alias: {
            modernizr: './libs/modernizr/modernizr-custom.js'
        }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};
