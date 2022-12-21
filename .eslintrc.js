module.exports = {
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:jsx-a11y/recommended',
		'plugin:styled-components-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:prettier/recommended'
	],
	plugins: [
		'import',
		'react',
		'@typescript-eslint',
		'jest',
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
	rules: {
		'import/no-default-export': 'error',
		'linebreak-style': 'off',
		'no-use-before-define': 'off',
		'template-curly-spacing': 'error',
		'space-unary-ops': 'error',
		'@typescript-eslint/default-param-last': ['error'],
		'@typescript-eslint/padding-line-between-statements:': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: 'export', next: '*' },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'block' },
			{ blankLine: 'always', prev: 'block', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' }
		],
		'@typescript-eslint/no-use-before-define': [1, { variables: false }],
		'react/jsx-key': [2, { checkFragmentShorthand: true }],
		'prettier/prettier': ['error', { endOfLine: 'auto' }]
	}
}
