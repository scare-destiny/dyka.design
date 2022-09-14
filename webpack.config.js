const webpack = require('webpack')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
	module: {
		rules: [
			// You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
			{
				test: /\.(jpe?g|png)$/i,
				type: 'asset',
			},
		],
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								// That setting might be close to lossless, but it’s not guaranteed
								// https://github.com/GoogleChromeLabs/squoosh/issues/85
								quality: 100,
							},
							webp: {
								lossless: 1,
							},
							avif: {
								// https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
								cqLevel: 0,
							},
						},
					},
				},
			}),
		],
	},
}
