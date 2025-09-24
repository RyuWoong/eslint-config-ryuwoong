module.exports = {
	extends: ["./react.js", "plugin:react-native/all"],
	plugins: ["react-native", "react-native-globals"],
	env: {
		"react-native/react-native": true,
	},
	globals: {
		__DEV__: true,
		__dirname: false,
		__filename: false,
		Alert: false,
		arguments: false,
		ArrayBuffer: false,
		Blob: false,
		Boolean: false,
		Buffer: false,
		console: false,
		decodeURI: false,
		decodeURIComponent: false,
		encodeURI: false,
		encodeURIComponent: false,
		Error: false,
		EvalError: false,
		Event: false,
		EventTarget: false,
		fetch: false,
		File: false,
		FileReader: false,
		FormData: false,
		global: false,
		Headers: false,
		Image: false,
		Intl: false,
		Map: false,
		MessageChannel: false,
		MessagePort: false,
		Number: false,
		Object: false,
		Promise: false,
		Proxy: false,
		RANGE_ERROR: false,
		ReferenceError: false,
		Reflect: false,
		regeneratorRuntime: false,
		require: false,
		requestAnimationFrame: false,
		Response: false,
		Set: false,
		String: false,
		Symbol: false,
		SyntaxError: false,
		TextDecoder: false,
		TextEncoder: false,
		TransformStream: false,
		TypeError: false,
		Uint8Array: false,
		URIError: false,
		URL: false,
		URLSearchParams: false,
		WebSocket: false,
		XMLHttpRequest: false,
		cancelAnimationFrame: false,
		clearImmediate: false,
		clearInterval: false,
		clearTimeout: false,
		setImmediate: false,
		setInterval: false,
		setTimeout: false,
		WebAssembly: false,
		Worker: false,
	},
	rules: {
		// React Native 전용 규칙들
		"react-native/no-unused-styles": "error",
		"react-native/split-platform-components": "off", // 필요에 따라 켤 수 있음
		"react-native/no-inline-styles": "off", // 스타일 객체 사용을 허용
		"react-native/no-color-literals": "off", // 색상 리터럴 사용 허용

		// React Native 환경에 맞는 규칙 조정
		"no-console": "off", // React Native에서는 console 사용이 일반적
		"react/jsx-no-undef": [
			"error",
			{
				allowGlobals: true, // React Native 글로벌 컴포넌트 허용
			},
		],

		// JSX 규칙들 React Native에 맞게 조정
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				// TypeScript 파일에서 React Native 글로벌 변수들 허용
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						argsIgnorePattern: "^_",
						varsIgnorePattern: "^_", // React Native에서 사용되는 변수들 무시
					},
				],
			},
		},
	],
};
