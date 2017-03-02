const path = require('path')

const config = {
    env: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version,

    path_base: path.resolve(__dirname, '../'),
    dir_client: 'src',
    dir_public: 'public',
    dir_test: 'tests',

    server_host: process.env.HOST || 'localhost',
    server_port: process.env.PORT || 3000,

    site_name: 'React-Redux-Starter-Kit', // Might wish to remove this later

    compiler_css_modules: true,
    compiler_devtool: 'source-map',
    compiler_hash_type: 'hash',
    compiler_fail_on_warning: false,
    compiler_quiet: false,
    compiler_public_path: '/',
    compiler_stats: {
        chunks: false,
        chunkModules: false,
        colors: true
    },
    compiler_vendor: [
        'babel-polyfill',
        'brace'
    ]
}

config.globals = {
    'process.env': {
        NODE_ENV: JSON.stringify(config.env),
        API_HOST: JSON.stringify(config.server_host),
        BASE_URL: JSON.stringify(config.server_host),
        SITE_NAME: JSON.stringify(config.site_name),
        VERSION: JSON.stringify(config.version)
    },
    NODE_ENV: config.env,
    __VERSION__: JSON.stringify(config.version),
    __ENV__: JSON.stringify(config.env),
    __DEV__: config.env === 'development',
    __PROD__: config.env === 'production',
    __TEST__: config.env === 'test'
}

config.utils_paths = (() => {
    const resolve = path.resolve
    const base = (...args) => resolve.apply(
        resolve, [config.path_base, ...args]
    )
    return {
        base,
        client: base.bind(null, config.dir_client),
        public: base.bind(null, config.dir_public)
    }
})()

module.exports = config
