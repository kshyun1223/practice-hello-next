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

### next/link 모듈
- next/link 모듈에 들어있는 Link 컴포넌트를 사용하면 클라이언트 사이드에서 경로 간의 이동을 구현할 수 있다
```javascript
import Link from "next/link" // Link 모듈 임포트

export default function NavBar() { // 내비게이션 바 예시
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
```

### next/router 모듈
- next/router는 라우터에 접근하기 위한 Next.js 내장 모듈이다
  - useRouter라는 hook으로 불러올 수 있다
- 예를 들어 router.pathname 객체는 브라우저의 현재 경로를 가리킨다

## 스타일
### CSS Module
- 리액트와 마찬가지로 CSS Module을 사용할 수 있다
- 또한 하나의 엘리먼트에 여러 CSS 클래스를 동시에 사용할 수 있다

### Styled JSX
- CSS-in-JS 형식의 Next.js 내장 라이브러리이다
- 다음과 같은 형태로 사용한다
```html
  <style jsx>{
    selector {
      attribute: value;
    }
  }</style>
```  
- 기본적으로 문자열이기 때문에 템플릿 리터럴을 사용해서 props 등을 넣을 수 있다

### _app 컴포넌트
- style 태그에 global이라는 property를 부여할 수는 있지만 해당 경로에서만 효과가 있다
  - 실질적으로 전역 컴포넌트를 구현하려면 _app 컴포넌트를 사용해야 한다
  - 파일명은 반드시 _app.js와 같은 형태로 작성해야 한다
- _app 컴포넌트가 존재하는 경우 Next.js는 페이지 요청이 들어왔을 때 바로 렌더링 하지 않고 여기로 먼저 전달한다
  - _app 컴포넌트는 전달받은 페이지를 자신의 내용과 함께 반환한다

### Layout Pattern
- _app.js 파일에는 공통 레이아웃 외에도 SEO, 방문자 분석 등 여러가지 내용이 들어가야 한다
  - 그래서 레이아웃과 관련된 코드들을 별도의 컴포넌트로 분리하는 경우가 많은데, 이를 레이아웃 패턴이라 한다

### 이미지
- 이미지는 public 폴더에 넣어놓으면 바로 가져올 수 있다

## SEO
### next/head 모듈
- next/head 모듈은 html의 head 요소에 접근하기 위한 Next.js 내장 모듈이다
- title 작성 예시
```javascript
  export default function Seo({title}){
    return(
      <div>
        <Head>
          <title>{title} | Hello Next</title>
        </Head>
      </div>
    )
  }
``` 

## Ajax
### react 모듈
- Next.js는 대부분의 기능들을 자체적으로 지원하지만 useEffect와 useState hook은 리액트에서 가져온다

## next.config.js
### redirects
```javascript
async redirects() {
  return [
    {
      source: "/entrance/:path*", // 진입 주소
      destination: "/exit/:path*", // 이동할 주소
      permanent: false,
    },
  ];
}
```
- path 옵션
  - `:path`를 사용하면 한 단계의 하위 경로를 전부 지정한다
  - `:path*`를 사용하면 모든 단계의 하위 경로를 전부 지정한다
- permanent 옵션
  - true로 지정하면 상태코드 308을 사용한다 (영구적인 리다이렉트)
  - false로 지정하면 상태코드 307을 사용한다 (임시 리다이렉트)


### rewrite
```javascript
async rewrites() {
  return [
    {
      source: "/api/movies", // 유저에게 표시되는 주소
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` // 실제로 작동하는 주소
    },
  ];
}
```
- 브라우저에 api 키를 표시하지 않으려면 rewrite를 사용할 수 있다
- rewrite는 redirects와 달리 브라우저에 표시되는 주소가 바뀌지 않고 내용만 다르게 렌더링 된다