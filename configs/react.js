const jsxA11y = require("eslint-plugin-jsx-a11y");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

const { sourceFiles } = require("./files");

module.exports = {
	name: "ryuwoong/react",
	files: sourceFiles,
	plugins: {
		"jsx-a11y": jsxA11y,
		react,
		"react-hooks": reactHooks,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		...react.configs.flat.recommended.rules,
		...react.configs.flat["jsx-runtime"].rules,
		...reactHooks.configs.flat.recommended.rules,
		...jsxA11y.flatConfigs.recommended.rules,
		"react/prop-types": "warn",
		"react/jsx-key": ["error", { checkFragmentShorthand: true }],
		"react/jsx-pascal-case": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
};
