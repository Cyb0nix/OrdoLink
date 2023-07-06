module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/OrdoLink/' // note the trailing slash
    : '/',
}