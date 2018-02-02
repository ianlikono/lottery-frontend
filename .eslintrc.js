module.exports = {
	extends: 'airbnb',
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/prefer-stateless-function': 0,
		'comma-dangle': 0,
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'react/no-did-mount-set-state': 0,
		'react/jsx-indent': 0,
		'jsx-a11y/label-has-for': 0
	},
	globals: {
		document: 1
	},
	parser: 'babel-eslint',
	env: {
		browser: 1
	}
};
