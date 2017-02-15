module.exports = config => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
    globals: Object.assign({}, config.globals, {
        'process.env': Object.assign({}, config.globals['process.env'], {
            BASE_URL: JSON.stringify('/confucius'),
            API_HOST: JSON.stringify('//local.jawbone.com/factuary/api')
        })
    })
})
