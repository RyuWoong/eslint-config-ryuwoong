const importPlugin = require("eslint-plugin-import");
const typescriptEslint = require("typescript-eslint");

const { typescriptFiles } = require("./files");

const recommendedConfig = typescriptEslint.configs.recommended.map((config, index) => ({
	...config,
	name: config.name || `ryuwoong/typescript/recommended-${index + 1}`,
	files: typescriptFiles,
}));

module.exports = [
	...recommendedConfig,
	{
		name: "ryuwoong/typescript",
		files: typescriptFiles,
		plugins: {
			import: importPlugin,
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "interface",
					format: ["PascalCase"],
					custom: {
						regex: "^I[A-Z]",
						match: false,
					},
				},
			],
			"no-undef": "off",
			"no-unused-vars": "off",
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
			"import/no-cycle": "error",
			"import/no-unresolved": "error",
		},
	},
];
