module.exports = config => ({
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: 'source-map',
    compiler_public_path: '/ver/static/confucius/public/',
    compiler_stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        errors: true,
        warnings: true
    },
    globals: Object.assign({}, config.globals, {
        'process.env': Object.assign({}, config.globals['process.env'], {
            BASE_URL: JSON.stringify('/confucius-new'),
            API_HOST: JSON.stringify('/factuary/api')
        })
    })
})
