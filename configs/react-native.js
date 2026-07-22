const reactNative = require("eslint-plugin-react-native");

const { sourceFiles } = require("./files");

module.exports = {
	name: "ryuwoong/react-native",
	files: sourceFiles,
	languageOptions: {
		globals: {
			__DEV__: "readonly",
		},
	},
	plugins: {
		"react-native": reactNative,
	},
	rules: {
		...reactNative.configs.all.rules,
		"react-native/no-unused-styles": "off",
		"react-native/split-platform-components": "off",
		"react-native/sort-styles": "off",
		"react-native/no-inline-styles": "off",
		"react-native/no-color-literals": "off",
		"react-native/no-raw-text": "off",
		"react-native/no-single-element-style-arrays": "error",
		"no-console": "off",
		"jsx-a11y/no-autofocus": "off",
		"react/jsx-no-undef": ["error", { allowGlobals: true }],
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
	},
};
