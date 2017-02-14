import _debug from 'debug'
import config from '../config'
import express from 'express'
import history from 'connect-history-api-fallback'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'

const app = express()
const debug = _debug('app:server')
const compiler = webpack(webpackConfig)

const serverConfig = {
    publicPath: webpackConfig.output.publicPath,
    contentBase: config.utils_paths.base(config.dir_client),
    hot: true,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    stats: config.compiler_stats,
    historyApiFallback: true
}

debug('Starting development server...')
const middleware = webpackDevMiddleware(compiler, serverConfig)
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(config.utils_paths.client('static')))
app.use(history())

app.listen(config.server_port, config.server_host, err => {
    if (err) {
        return debug(err)
    }
    debug(`Listening on http://${config.server_host}:${config.server_port}`)
})
