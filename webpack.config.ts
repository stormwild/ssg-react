import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Custom template',
    // Load a custom template (lodash by default)
    template: './src/index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // port: 9000
  }
};

export default config;