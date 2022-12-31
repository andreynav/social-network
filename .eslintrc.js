module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:jsx-a11y/recommended',
		'plugin:styled-components-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	plugins: [
		'import',
		'react',
		'@typescript-eslint',
		'jsx-a11y',
		'styled-components-a11y'
	],
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	ignorePatterns: ['src/types/*'],
	rules: {
		'import/no-default-export': 'error',
		'linebreak-style': 'off',
		'no-use-before-define': 'off',
		'template-curly-spacing': 'error',
		'space-unary-ops': 'error',
		'@typescript-eslint/default-param-last': ['error'],
		'@typescript-eslint/no-use-before-define': [1, { variables: false }],
		'react/jsx-key': [2, { checkFragmentShorthand: true }],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'@typescript-eslint/no-shadow': 'warn',
		'@typescript-eslint/no-unused-expressions': [
			'warn',
			{
				allowShortCircuit: true,
				allowTernary: false,
				allowTaggedTemplates: false,
				enforceForJSX: false
			}
		]
	}
}
