export default () => ({
	compiler_fail_on_warning: false,
	compiler_hash_type: 'chunkhash',
	compiler_devtool: null,
	compiler_stats: {
		chunks: true,
		chunkModules: true,
		colors: true
	},
	server_post: process.env.PORT || 8000
})
