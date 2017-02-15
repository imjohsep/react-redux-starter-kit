module.exports = config => ({
    compiler_devtool: false,
    globals: Object.assign({}, config.globals, {
        'process.env': Object.assign({}, config.globals['process.env'], {
            BASE_URL: JSON.stringify('/confucius'),
            API_HOST: JSON.stringify('//test.jawbone.com/factuary/api')
        })
    })
})
