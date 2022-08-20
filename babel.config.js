module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@src': './src',
					'@navigation': './src/navigation',
					'@app': './src/app',
					'@assets': './src/assets',
					'@components': './src/components',
					'@constants': './src/constants',
					'@i18n': './src/i18n',
					'@reducers': './src/reducers',
					'@screens': './src/screens',
					'@themes': './src/themes',
					'@utils': './src/utils',
					'@api': './src/api',
				},
			},
		],
	],
};
