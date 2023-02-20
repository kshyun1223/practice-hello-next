# Next.js
## 개발환경
### Next.js 설치
- `npx create-next-app@latest --typescript`
- 특정 버전을 지정하려면 `@` 뒤에 입력한다
- 타입스크립트를 사용하려면 `--` 뒤에 입력한다

### npm script
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 라우팅
### 기본 사용법
- pages 폴더 안에 컴포넌트를 작성하면 해당 **파일명**에 해당하는 경로가 생성된다
  - 컴포넌트의 이름은 상관이 없다
  - `export default function`의 형태로 작성해야 한다
- index라는 이름은 기본적으로 `/` 경로에 할당되어 있다
- 파일명을 변경하면 라우팅 경로도 함께 변경된다

### 컴포넌트
- 기본적인 컴포넌트 작성법은 리액트와 다르지 않다

### 내비게이션 바 
- `next/link` 모듈에 포함된 Link 컴포넌트를 사용하면 클라이언트 사이드에서 경로 간의 이동을 구현할 수 있다
```javascript
import Link from "next/link" // Link 모듈 임포트

export default function NavBar() { // 컴포넌트에 사용
  return (
    <nav>
      <Link href="/">Home</Link>
      <> </>
      <Link href="/about-next">About</Link>
    </nav>
  )
}
```

### `useRouter()`
- router는 라우터에 접근하기 위한 Next.js 내장 모듈이다
  - `useRouter()` hook으로 불러올 수 있다
- 예를 들어 `router.pathname` 객체는 브라우저의 현재 경로를 가리킨다

## 스타일
### CSS Module
- 리액트와 마찬가지로 CSS Module을 사용할 수 있다
  - 또한 하나의 엘리먼트에 여러 클래스를 동시에 사용할 수 있다

### Styled JSX
- CSS-in-JS 형식의 Next.js 내장 라이브러리이다
- 다음과 같은 형태로 사용한다
  ```javascript
  <style jsx>{`
    selector {
      attribute: value;
    }
  `}</style>`
  ```
- 기본적으로 문자열이기 때문에 템플릿 리터럴을 사용해서 props 등을 넣을 수 있다