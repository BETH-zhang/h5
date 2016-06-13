/**********************************************
 * created by beth on 2016年6月13日
 * 打包文件
 **********************************************/
var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var compressjs = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});
module.exports = {
    entry: {
        index: './js/index.js',
        vendor: [
            'jquery',
            'jquery-ui',
            'fullpage.js'
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        librayTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize") },
            { test: /\.(jpg|png)$/, loader: "url?limit=8192" }
        ]
    },
    plugins: [
        providePlugin, 
        compressjs,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin("style.css")
    ]
}