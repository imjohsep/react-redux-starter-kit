const _debug = require('debug')
const config = require('../config')
const express = require('express')
const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')

const debug = _debug('app:server')
const compiler = webpack(webpackConfig)
const serverConfig = {
    publicPath: webpackConfig.output.publicPath,
    contentBase: config.utils_paths.base(config.dir_client),
    hot: true,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    stats: config.compiler_stats
}
const middleware = webpackDevMiddleware(compiler, serverConfig)
const app = express()

debug('Starting development server')

app.use(history())
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.listen(config.server_port, config.server_host, (err) => {
    if (err) {
        return debug(err)
    }
    return debug(`Listening on http://${config.server_host}:${config.server_port}`)
})
