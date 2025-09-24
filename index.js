module.exports = {
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	rules: {
		// 코드 품질 규칙들
		"no-console": "warn",
		"no-debugger": "warn",
		"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"prefer-const": "error",
		"no-var": "error",

		// Best practices
		eqeqeq: ["error", "always"],
		curly: ["error", "all"],
		"no-eval": "error",
		"no-implied-eval": "error",
		"no-implicit-globals": "error",
		"no-new-func": "error",
		"no-script-url": "error",

		// 잠재적 버그 방지
		"no-undef": "error",
		"no-unreachable": "error",
		"valid-typeof": "error",
	},
};
