const reactNativeConfig = require("./react-native");
const typescriptConfig = require("./configs/typescript");
const { typescriptFiles } = require("./configs/files");

module.exports = [
	...reactNativeConfig,
	...typescriptConfig,
	{
		name: "ryuwoong/react-native-typescript",
		files: typescriptFiles,
		rules: {
			"react/prop-types": "off",
		},
	},
];
