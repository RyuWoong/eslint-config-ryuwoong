const js = require("@eslint/js");
const globals = require("globals");

const { sourceFiles } = require("./files");

module.exports = [
	{
		name: "ryuwoong/base",
		files: sourceFiles,
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
		rules: {
			...js.configs.recommended.rules,
			"no-console": "warn",
			"no-debugger": "warn",
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"prefer-const": "error",
			"no-var": "error",
			eqeqeq: ["error", "always"],
			curly: ["error", "all"],
			"no-eval": "error",
			"no-implied-eval": "error",
			"no-implicit-globals": "error",
			"no-new-func": "error",
			"no-script-url": "error",
		},
	},
	{
		name: "ryuwoong/base/commonjs",
		files: ["**/*.{cjs,cts}"],
		languageOptions: {
			sourceType: "commonjs",
		},
	},
];
