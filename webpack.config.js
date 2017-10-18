/* We'll be using Webpack for module bundling (Connecting them together while keeping them in separate scopes)
It will transpile all our JS files, SAAS files or any other files, optimize images
*/

//Using node's native package 'path'
const appPath = require('path');
const rootPath = appPath.join(__dirname, '');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//Constant with our paths
var paths = {
    SRC: `${rootPath}/src`,
    DIST: `${rootPath}/dist`,   
    JS: `${rootPath}/src/index.js`
}

//Webpack Configuration
module.exports = {
    entry: paths.JS,
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },

    // Dev server configuration -> REMOVED IN THIS STEP
     /* devServer: {
        publicPath: '/',
        open: true
      },
 */
// Tell webpack to use html plugin -> ADDED IN THIS STEP
// index.html is used as a template in which it'll inject bundled app.
    plugins: [
        new HtmlWebpackPlugin({
            template: appPath.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('src/css/app.css',{
            filename: 'app.css',
            allChunks: true
        }),   
    ],

    // Loaders configuration -> ADDED IN THIS STEP
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
            test: /\.scss$/,
            use: [
                {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }
            ]
          }
      ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },


};





