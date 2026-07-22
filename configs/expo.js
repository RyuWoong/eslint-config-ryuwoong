const jsxA11y = require("eslint-plugin-jsx-a11y");
const reactNative = require("eslint-plugin-react-native");

const baseConfig = require("./base");
const { sourceFiles, typescriptFiles } = require("./files");
const reactConfig = require("./react");
const reactNativeConfig = require("./react-native");
const typescriptConfig = require("./typescript");

const typescriptRules = Object.assign(
	{},
	...typescriptConfig.map(({ rules = {} }) => rules),
);

module.exports = [
	...baseConfig,
	{
		name: "ryuwoong/expo",
		files: sourceFiles,
		languageOptions: reactNativeConfig.languageOptions,
		plugins: {
			"jsx-a11y": jsxA11y,
			"react-native": reactNative,
		},
		settings: reactConfig.settings,
		rules: {
			...reactConfig.rules,
			...reactNativeConfig.rules,
		},
	},
	{
		name: "ryuwoong/expo/typescript",
		files: typescriptFiles,
		rules: {
			...typescriptRules,
			"react/prop-types": "off",
		},
	},
];
