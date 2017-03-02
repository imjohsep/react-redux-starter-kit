const faviconsContext = require.context(
  '!!file-loader?name=[name].[ext]!.',
  true,
  /\.(svg|png|ico)$/
)

faviconsContext.keys().forEach(faviconsContext)
