const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const devServerConfig = require('./webpackDevServer.config');

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'public/index.html',
});

const moduleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const cssPlugin = new MiniCssExtractPlugin({ filename: '[hash:8].css' });

module.exports = merge(devServerConfig, {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[hash:8].js',
    publicPath: '/',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [htmlPlugin, moduleReplacementPlugin, cssPlugin],
});
