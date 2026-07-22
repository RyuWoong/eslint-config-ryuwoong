# eslint-config-ryuwoong

JavaScript, TypeScript, React, React Native 프로젝트를 위한 ESLint 9 flat config preset입니다.

## 요구 사항

- Node.js 20.9 이상
- ESLint 9.39 이상
- TypeScript 프로젝트는 TypeScript 4.8.4 이상 6.1 미만

## 설치

```bash
npm install --save-dev eslint eslint-config-ryuwoong
```

TypeScript 프로젝트는 TypeScript도 설치합니다. preset이 사용하는 ESLint parser와 plugin은 패키지에 포함되어 있습니다.

```bash
npm install --save-dev typescript
```

## Preset

| 경로 | 대상 |
| --- | --- |
| `eslint-config-ryuwoong` | JavaScript |
| `eslint-config-ryuwoong/react` | React |
| `eslint-config-ryuwoong/typescript` | TypeScript |
| `eslint-config-ryuwoong/react-native` | React Native |
| `eslint-config-ryuwoong/react-native-typescript` | React Native + TypeScript |
| `eslint-config-ryuwoong/expo` | Expo의 flat config와 합성 |

## 사용법

`eslint.config.js`에서 프로젝트에 맞는 preset을 내보냅니다.

```js
const ryuwoongConfig = require("eslint-config-ryuwoong/typescript");

module.exports = ryuwoongConfig;
```

프로젝트 규칙은 preset 뒤에 추가합니다.

```js
const ryuwoongConfig = require("eslint-config-ryuwoong/react-native-typescript");

module.exports = [
	...ryuwoongConfig,
	{
		files: ["src/**/*.{ts,tsx}"],
		rules: {
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"react-native/no-color-literals": "warn",
			"react-native/no-inline-styles": "warn",
		},
	},
];
```

## Expo 프로젝트

Expo 기본 설정을 먼저 적용하고 이 preset과 프로젝트 규칙을 차례로 합성합니다.

```js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const ryuwoongConfig = require("eslint-config-ryuwoong/expo");

module.exports = defineConfig([
	expoConfig,
	...ryuwoongConfig,
	{
		files: ["src/**/*.{ts,tsx}"],
		rules: {
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"react-native/no-color-literals": "warn",
			"react-native/no-inline-styles": "warn",
		},
	},
]);
```

`expo` preset은 Expo가 이미 등록한 React, React Hooks, TypeScript, import plugin을 다시 등록하지 않는다. 따라서 의존성의 설치 위치나 dedupe 여부와 관계없이 flat config plugin 충돌 없이 합성할 수 있다.

## 주요 규칙

- ESLint와 각 framework의 recommended rules
- React Hooks와 JSX 접근성 규칙
- TypeScript `any` 제한과 미사용 변수 검사
- import 정렬, 미해결 import, 순환 참조 검사
- React Native 스타일 검사
- 코드 포맷팅은 Prettier 같은 formatter에 위임

## 2.0.0 변경 사항

- eslintrc와 `FlatCompat` 지원 제거
- ESLint 9 native flat config 전용으로 전환
- React Native + TypeScript 통합 preset 추가
- Expo flat config 전용 합성 preset 추가
- parser와 plugin을 패키지 dependency로 제공
- Node.js 최소 버전을 20.9로 변경

## 라이선스

ISC
