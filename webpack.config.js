const _debug = require('debug')
const AssetsPlugin = require('assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const config = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const webpack = require('webpack')

const debug = _debug('app:webpack')
debug(`Creating ${config.env} configuration`)

const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

const _postcss = {
    loader: 'postcss-loader',
    options: {
        sourceMap: 'inline',
        plugins: () => [autoprefixer]
    }
}

const extractCss = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: __DEV__,
    allChunks: true
})

const webpackConfig = {
    name: config.site_name,
    target: 'web',
    devtool: config.compiler_devtool,
    entry: {
        app: [config.utils_paths.client('index.js')],
        vendor: config.compiler_vendor
    },
    output: {
        filename: `[name].[${config.compiler_hash_type}].js`,
        path: config.utils_paths.base(config.dir_public),
        publicPath: config.compiler_public_path
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [config.utils_paths.client(), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: __DEV__ ? [
                    'react-hot-loader',
                    'babel-loader?cacheDirectory',
                    'eslint-loader'
                ] : [
                    'babel-loader?cacheDirectory',
                    'eslint-loader'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        _postcss
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractCss.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 3,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                modules: true,
                                sourceMap: true
                            }
                        },
                        _postcss,
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [
                                    config.utils_paths.base(config.dir_client),
                                    config.utils_paths.client('css'),
                                    config.utils_paths.client('img')
                                ]
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|gif)$/,
                use: ['url-loader?name=img/[name].[ext]&limit=8000']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ['url-loader?name=fonts/[hash].[ext]']
            },
            {
                test: /\.svg$/,
                use: ['url-loader?name=svg/[hash].ext']
            }
        ]
    },
    plugins: [
        extractCss,
        new webpack.DefinePlugin(config.globals)
    ]
}

if (!__TEST__) {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            environment: process.env.NODE_ENV,
            filename: 'index.html',
            hash: true,
            inject: true,
            template: config.utils_paths.client('index.html'),
            path: config.utils_paths.base(config.dir_public),
            minify: { collapseWhitespace: __PROD__ }
        }),
        new WebpackNotifierPlugin({
            title: config.site_name,
            contentImage: path.join(__dirname, 'logo.png')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    )
}

if (__DEV__) {
    debug('Enable development only plugins')

    webpackConfig.entry.app.unshift(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    )
} else if (__PROD__) {
    debug('Enable production only plugins')

    webpackConfig.plugins.push(
        new AssetsPlugin({
            filename: 'manifest.json',
            path: config.utils_paths.public(),
            fullPath: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                dead_code: true,
                screw_ie8: true,
                unused: true,
                warnings: false
            },
            output: {
                comments: false
            },
            mangle: true
            // sourceMap: true
        })
    )
} else if (__TEST__) {
    debug('Applying test only settings')

    // karma watches the test entry points so we don't need to specify
    delete webpackConfig.entry

    webpackConfig.module.rules.push({
        test: /sinon\/pkg\/sinon\.js/,
        use: ['imports-loader?define=>false,require=>false']
    })
    webpackConfig.resolve = Object.assign({}, webpackConfig.resolve, {
        alias: Object.assign({}, webpackConfig.resolve.alias, {
            sinon: 'sinon/pkg/sinon'
        })
    })
    webpackConfig.externals = {
        // For Enzyme
        // @see https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}

module.exports = webpackConfig
