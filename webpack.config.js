/**********************************************
 * created by beth on 2016年6月13日
 * 打包文件
 **********************************************/
 var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
 module.exports = {
 	entry: {
 		index: './js/index.js'
 	},
 	output: {
 		path: __dirname + '/build',
 		filename: '[name].js',
 		librayTarget: 'umd'
 	}
 }