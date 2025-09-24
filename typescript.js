module.exports = {
	extends: ["./index.js", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "import"],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
		project: "./tsconfig.json", // TypeScript 프로젝트에서 tsconfig.json 경로
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		// TypeScript 관련 규칙들
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/prefer-const": "error",
		"@typescript-eslint/no-var-requires": "error",

		// 기본 ESLint 규칙들을 TypeScript용으로 오버라이드
		"no-unused-vars": "off", // @typescript-eslint/no-unused-vars로 대체
		"no-array-constructor": "off", // @typescript-eslint/no-array-constructor로 대체
		"no-empty-function": "off", // @typescript-eslint/no-empty-function으로 대체
		"no-extra-semi": "off", // @typescript-eslint/no-extra-semi로 대체
		"no-loss-of-precision": "off", // @typescript-eslint/no-loss-of-precision으로 대체
		"no-unused-labels": "off", // @typescript-eslint/no-unused-labels로 대체

		// Import 규칙들
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"import/no-unresolved": "error",
		"import/no-cycle": "error",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				// TypeScript 파일 전용 규칙들
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
			},
		},
	],
};
