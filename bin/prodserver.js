import config from '../config'
import express from 'express'
import path from 'path'

const app = express()

console.info('Starting production server..')

app.use(express.static(config.utils_paths.base(config.dir_dist)))

app.get('*', function (req, res) {
    res.sendFile(path.join(config.utils_paths.base(config.dir_dist), 'index.html'))
})


app.listen(config.server_port, err => {
    if (err) {
        console.log(err)
    }
    console.log(`Listening on port ${config.server_port}`)
})
