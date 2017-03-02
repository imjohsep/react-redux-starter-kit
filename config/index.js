const fs = require('fs')
const _debug = require('debug')
const config = require('./base')

const debug = _debug('app:config')

debug(`Creating ${config.env} configuration`)

const filename = `${config.env}`
let hasOverrides = false

try {
    fs.lstatSync(`${__dirname}/${filename}.js`)
    hasOverrides = true
} catch (e) {
    //
}

let overrides = null

if (hasOverrides) {
    overrides = require(`./${filename}`)(config)
} else {
    debug(`No configuration for NODE_ENV "${config.env}". Applying base.`)
}

module.exports = Object.assign({}, config, overrides)
