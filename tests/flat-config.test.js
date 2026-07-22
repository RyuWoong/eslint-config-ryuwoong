const assert = require("node:assert/strict");
const test = require("node:test");

const { ESLint } = require("eslint");

const presets = {
	base: require("eslint-config-ryuwoong"),
	react: require("eslint-config-ryuwoong/react"),
	typescript: require("eslint-config-ryuwoong/typescript"),
	"react-native": require("eslint-config-ryuwoong/react-native"),
	"react-native-typescript": require("eslint-config-ryuwoong/react-native-typescript"),
	expo: require("eslint-config-ryuwoong/expo"),
};

test("모든 preset이 native flat config를 제공한다", () => {
	for (const [name, config] of Object.entries(presets)) {
		assert.ok(Array.isArray(config), `${name} preset은 배열이어야 한다`);
		assert.ok(config.length > 0, `${name} preset은 비어 있지 않아야 한다`);

		for (const item of config) {
			assert.equal("extends" in item, false, `${name} preset에 legacy extends가 없어야 한다`);

			if (item.plugins) {
				for (const plugin of Object.values(item.plugins)) {
					assert.equal(typeof plugin, "object");
				}
			}
		}
	}
});

test("base preset이 JavaScript 품질 규칙을 적용한다", async () => {
	const eslint = new ESLint({
		overrideConfig: presets.base,
		overrideConfigFile: true,
	});
	const [result] = await eslint.lintText("const result = 1 == '1';\nvoid result;\n", {
		filePath: "src/value.js",
	});

	assert.ok(result.messages.some(({ ruleId }) => ruleId === "eqeqeq"));
});

test("React Native TypeScript preset이 TypeScript와 프로젝트 규칙을 함께 적용한다", async () => {
	const eslint = new ESLint({
		overrideConfig: presets["react-native-typescript"],
		overrideConfigFile: true,
	});
	const [result] = await eslint.lintText("const value: any = 1;\nexport default value;\n", {
		filePath: "src/value.ts",
	});
	const config = await eslint.calculateConfigForFile("src/Screen.tsx");

	assert.equal(result.fatalErrorCount, 0);
	assert.ok(result.messages.some(({ ruleId }) => ruleId === "@typescript-eslint/no-explicit-any"));
	assert.equal(config.rules["react/prop-types"][0], 0);
	assert.equal(config.rules["import/no-cycle"][0], 2);
});

test("Expo preset이 eslint-config-expo와 plugin 충돌 없이 합성된다", async () => {
	const expoConfig = require("eslint-config-expo/flat");
	const eslint = new ESLint({
		overrideConfig: [...expoConfig, ...presets.expo],
		overrideConfigFile: true,
	});
	const [result] = await eslint.lintText("const Screen = () => <></>;\nexport default Screen;\n", {
		filePath: "src/Screen.tsx",
	});
	const config = await eslint.calculateConfigForFile("src/Screen.tsx");

	assert.equal(result.fatalErrorCount, 0);
	assert.equal(result.errorCount, 0);
	assert.equal(config.rules["react/prop-types"][0], 0);
	assert.equal(config.rules["react-native/no-single-element-style-arrays"][0], 2);
});
