module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/video-project/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static'
}
