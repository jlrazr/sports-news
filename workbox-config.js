module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,gz,webp,png,html,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};