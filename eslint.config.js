const baseConfig = require("./index");

module.exports = [
	...baseConfig,
	{
		name: "ryuwoong/package",
		files: ["**/*.js"],
		rules: {
			"no-console": "off",
		},
	},
];
