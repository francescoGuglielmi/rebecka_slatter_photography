const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|jpg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: ''
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(), 
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'public', 
          to: '',
          globOptions: {
            ignore: ['index.html']
          }, 
        }
      ]
    }),
  ],
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
}
