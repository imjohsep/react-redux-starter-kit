const nodemon = require('nodemon');

nodemon({
    args: process.argv,
    script: 'tests/index.js',
    execMap: { js: 'node_modules/.bin/babel-node' },
    ext: 'js jsx',
    watch: ['src/', 'tests/unit', 'tests/integration']
}).on('quit', () => {
    process.exit();
})
