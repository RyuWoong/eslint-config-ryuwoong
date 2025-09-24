module.exports = {
	extends: ["./index.js", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:jsx-a11y/recommended"],
	plugins: ["react", "react-hooks", "jsx-a11y"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		// React 관련 규칙들
		"react/react-in-jsx-scope": "off", // React 17+에서는 필요 없음
		"react/prop-types": "warn",

		// JSX 품질 규칙들 (Prettier가 스타일은 관리)
		"react/jsx-key": ["error", { checkFragmentShorthand: true }],
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",

		// React Hooks 규칙들
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
};
