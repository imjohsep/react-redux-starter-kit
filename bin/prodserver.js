import config from '../config'
import express from 'express'
import path from 'path'

const app = express()

console.info('\nStarting production server..')

    app.use(express.static(config.utils_paths.base(config.dir_dist)))

    app.get('*', function (req, res) {
        res.sendFile(path.join(config.utils_paths.base(config.dir_dist), 'index.html'))
    })


app.listen(config.server_port, config.server_host, err => {
    if (err) {
        return debug(err)
    }
    console.log(`Listening on http://${config.server_host}:${config.server_port}`)
})
