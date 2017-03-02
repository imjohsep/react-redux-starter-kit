/* eslint-disable no-console */
const _debug = require('debug')
const fs = require('fs')
const minimist = require('minimist')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const config = require('../config')

const debug = _debug('app:compile')
const argv = minimist(process.argv.slice(2), {
    boolean: 'stats', alias: { s: 'stats' }
})

// Log an error when the compiler completely fails to initialize
const logError = (err) => {
    debug('Webpack compiler encountered a fatal error')
    console.error(err.stack || err);
    if (err.details) {
        console.error(err.details);
    }
}

// Log an error when the compilation process encounters an error
const logCompileError = (stats) => {
    debug('Webpack compiler encountered errors')
    console.error(stats.toString('errors-only'))
}

// Log a warning when the complilation results in them
const logWarning = (stats) => {
    debug('Webpack compiler encountered warnings')
    console.warn(stats.toString(config.compiler_stats))
}

// Write stats json to a file. Can be used to analyze bundle contents
const writeStatsToFile = (stats) => {
    const filepath = config.utils_paths.public('_stats.json')
    debug(`Writing Webpack stats to ${filepath}`)
    fs.writeFile(filepath, JSON.stringify(stats.toJson()))
}

debug('Create Webpack compiler')
const compiler = webpack(webpackConfig)

debug('Run Webpack compiler')
compiler.run((err, stats) => {
    debug('Webpack compile complete')
    if (err) {
        debug('Webpack compiler encountered a fatal error', err)
        logError(err)
        process.exit(1)
    } else if (stats.hasErrors()) {
        logCompileError(stats)
        process.exit(1)
    } else if (stats.hasWarnings()) {
        logWarning(stats)
        if (config.compiler_fail_on_warning) {
            process.exit(1)
        }
    }
    if (argv.stats) {
        writeStatsToFile(stats)
    }
    debug('No errors or warnings encountered')
})
