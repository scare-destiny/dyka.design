const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js',
	},
	devServer: {
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg|webp)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
