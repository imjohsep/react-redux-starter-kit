const config = require('../config')
const express = require('express')
const path = require('path')

const app = express()

console.info('Starting production server..')

app.use(express.static(config.utils_paths.base(config.dir_public)))

app.listen(config.server_port, err => {
    if (err) {
        console.log(err)
    }
    console.log(`Listening on port ${config.server_port}`)
})
