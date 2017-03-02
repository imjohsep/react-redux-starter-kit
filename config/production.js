module.exports = config => ({
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: 'source-map',
    compiler_public_path: '/',
    compiler_stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        errors: true,
        warnings: true
    }
})
