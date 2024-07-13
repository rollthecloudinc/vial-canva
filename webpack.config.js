const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: __dirname + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        /*{
          from: './public/styles.css', // Replace with the path to your source CSS file
          to: '[name][ext]' // Destination path in the 'dist' directory
        },*/
        {
          from: './public/vial_web_identity.svg', // Replace with the path to your source CSS file
          to: '[name][ext]' // Destination path in the 'dist' directory
        },
        /*{
          from: './node_modules/tabulator-tables/dist/css/tabulator.min.css', // Replace with the path to your source CSS file
          to: '[name][ext]' // Destination path in the 'dist' directory
        },*/
        /*{
          from: './node_modules/tabulator-tables/dist/css/tabulator_simple.min.css', // Replace with the path to your source CSS file
          to: '[name][ext]' // Destination path in the 'dist' directory
        }*/
      ]
    })
  ]
};