import HtmlWebPackPlugin from 'html-webpack-plugin';
import {
  DefinePlugin
} from 'webpack';

module.exports = {
  devServer: {
    contentBase: '../',
    hot: true
  },
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  mode: 'development',
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + './../dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./src/index.html"
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};