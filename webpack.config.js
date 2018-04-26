const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name]-[hash].css',
  allChunks: true
});

module.exports = function (env, argv) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract(['css-loader', 'sass-loader'])
        }
      ]
    },
    entry: {
      index: './src/index.js'
    },
    plugins: [
      // your project's webpack config goes here
      new HtmlWebpackPlugin({
        filename: path.join(path.resolve(process.cwd(),
          `build/index.html`)),
        template: './src/index.html',
        favicon: './src/components/images/favicon.ico',
        //inlineSource: '.(js|css)$',
        minify: env === 'prod' ? {
          html5: true,
          collapseWhitespace: true
        } : false
      }),
      new HtmlWebpackPlugin({
        filename: path.join(path.resolve(process.cwd(),
          `build/scenes/home/scenes/emulator/index.html`)),
        template: './src/scenes/home/scenes/emulator/index.html',
        favicon: './src/components/images/favicon.ico',
        //inlineSource: '.(js|css)$',
        minify: env === 'prod' ? {
          html5: true,
          collapseWhitespace: true
        } : false
      }),
      extractSass
    ]
  };
};