module.exports = {
  entry: {
    index: './src/index.js',
    sw: './src/sw.js'
  },
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: 'inline-source-map'
};
