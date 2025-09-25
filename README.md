# eslint-config-ryuwoong

개인화된 ESLint 설정 프리셋 라이브러리입니다. JavaScript, TypeScript, React 프로젝트에 맞는 규칙들을 제공합니다.

## 설치

```bash
npm install --save-dev eslint-config-ryuwoong eslint
```

또는 yarn을 사용하는 경우:

```bash
yarn add --dev eslint-config-ryuwoong eslint
```

### 추가 의존성 설치 (필요에 따라)

#### React 프로젝트의 경우

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

#### React Native 프로젝트의 경우

```bash
npm install --save-dev eslint-plugin-react-native eslint-plugin-react-native-globals
```

#### TypeScript 프로젝트의 경우

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

## 사용법

### 기본 설정 (JavaScript)

`.eslintrc.js` 또는 `.eslintrc.json` 파일에 다음을 추가하세요:

```js
module.exports = {
	extends: ["ryuwoong"],
};
```

### React 프로젝트

```js
module.exports = {
	extends: ["ryuwoong/react"],
};
```

### TypeScript 프로젝트

```js
module.exports = {
	extends: ["ryuwoong/typescript"],
};
```

### React + TypeScript 프로젝트

```js
module.exports = {
	extends: ["ryuwoong/react", "ryuwoong/typescript"],
};
```

### React Native 프로젝트

```js
module.exports = {
	extends: ["ryuwoong/react-native"],
};
```

### React Native + TypeScript 프로젝트

```js
module.exports = {
	extends: ["ryuwoong/react-native", "ryuwoong/typescript"],
};
```

## 포함된 규칙들

### 기본 규칙 (`ryuwoong`)

- ESLint 권장 규칙들
- 코드 품질 향상 규칙들 (no-console, no-debugger 등)
- 잠재적 버그 방지 규칙들
- 코드 포맷팅은 Prettier 등의 포맷터에 맡김

### React 규칙 (`ryuwoong/react`)

- 기본 규칙 + React 권장 규칙들
- JSX 접근성 규칙 (jsx-a11y)
- React Hooks 규칙
- JSX 품질 및 보안 규칙들

### TypeScript 규칙 (`ryuwoong/typescript`)

- 기본 규칙 + TypeScript 권장 규칙들
- Import 정렬 및 검증 규칙들
- TypeScript 명명 규칙

### React Native 규칙 (`ryuwoong/react-native`)

- React 규칙 + React Native 전용 규칙들
- React Native 글로벌 변수들 지원 (Alert, fetch, **DEV** 등)
- 네이티브 컴포넌트 스타일링 규칙
- 플랫폼별 컴포넌트 관리 규칙

## 커스터마이징

각 preset은 필요한 경우 프로젝트에서 추가 규칙을 덮어쓸 수 있습니다:

```js
module.exports = {
	extends: ["ryuwoong/react"],
	rules: {
		// 프로젝트 맞춤 규칙들
		"react/prop-types": "off",
		"no-console": "off",
	},
};
```

React Native 프로젝트의 경우:

```js
module.exports = {
	extends: ["ryuwoong/react-native"],
	rules: {
		// 프로젝트 맞춤 규칙들
		"react-native/no-inline-styles": "warn", // 인라인 스타일 경고로 완화
		"react-native/no-color-literals": "warn", // 색상 리터럴 경고로 완화
	},
};
```

## 기여

이슈나 풀 리퀘스트를 환영합니다! 😊

## 라이선스

ISC
