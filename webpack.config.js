const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_module|bower_components)/,
          use: ['babel-loader']
        },
        {     
          test: /\.css$/,
          use: [
          // { loader: MiniCssExtractPlugin.loader,
          // options: { publicPath: '../'} },
          { loader: "css-loader",
            options:{importLoaders: 1}  },          
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //   sourceMap: true,
          //   config: {
          //     ctx: {
          //     cssnano: {},
          //     autoprefixer: {}
          //     }
          //   }
          //   }
          // },
          {
            loader: 'resolve-url-loader' // améliore la résolution des chemins relatifs 
            // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
          },          
          { loader: "sass-loader",
            options: {sourceMap: true} }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash].[ext]'
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            { loader: 'image-webpack-loader' },
          ],
         },


      ]
    },
    plugins: [
      // new CleanWebpackPlugin('dist/*.*', {}),
      // new MiniCssExtractPlugin({
      //   filename: "[name].css",
      //   chunkFilename: "[id].css"
      // }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ],
    devServer: {
      contentBase: './dist',
      port: 8000
    }
  };