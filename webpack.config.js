module.exports = {
    entry: './src/Index.jsx',
    mode: 'development',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };