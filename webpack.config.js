module.exports = {
  entry: `${__dirname}/src/main.tsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  // generate different source maps for dev and production
  devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  // to mimic GitHub Pages serving 404.html for all paths
  // and test spa-github-pages redirect in dev
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/404.html' }],
    },
  },
};