var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/js/index.js'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, "src"),
			loader: 'react-hot'
		}, {
			test: /\.jsx?$/,
			include: path.join(__dirname, "src"),
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.css$/,
			include: path.join(__dirname, "src/css/"),
			loader: "style-loader!css-loader"
		}]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	output: {
		path: __dirname + "/assets/js",
		filename: "boundle.js",
		puclicPath: "/js"
	},
	devServer: {
		contentBase: "./assets/",
		hot: true,
		host: "localhost"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'My App',
			template: 'src/schedule-table.html',
			filename: 'index.html'
		})
	]

}