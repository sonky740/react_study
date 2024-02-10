# EXEM Study

https://nomadcoders.co/react-masterclass

- EXEM FE3팀 Study를 위해 들으며 정리.

## 1주차 - 2024.02.xx ~ 2024.02.xx

### Styled Components

- 중복된 스타일 상속을 위해 props 및 styled() 사용 가능
- 동일한 스타일을 다른 태그로 변경할 때 `as` 사용
- `attrs`를 사용하여 기본 속성을 설정할 수 있음
- animation을 위해 `keyframes` 사용 가능
- 자식 컴포넌트의 스타일을 변경할 때 `${}` 사용
- `ThemeProvider`를 사용하여 테마를 설정할 수 있음
- `withComponent`를 사용하여 컴포넌트를 확장할 수 있음 (v4 `as` 도입 이후 잘안쓰
  게 됨)
- `createGlobalStyle`을 사용하여 전역 스타일을 설정할 수 있음
- 컴포넌트 내에서 theme 값을 가져오려면 v5에 추가된 styled-components의
  `useTheme`를 사용할 수 있음 (그 전엔 react의 `useContext` + styled-components
  의 `ThemeContext` 사용과동일)

### Typescript

- `styled.xxx<T>` 를 사용하여 타입을 설정할 수 있음
- styled-components에 타입을 추가하고 싶을 때 `styled.d.ts` 파일을 생성하여 타입
  을추가할 수 있음
- react 내의 이벤트들에 대한 타입은 `SyntheticEvent`를 사용하여 설정할 수 있음

### Router V6

- 6.4 이전 버전에서는 `BrowserRouter`를 사용하여 jsx 내에서 라우팅을 설정하였으
  나, 6.4 이후 버전에는 `createBrowserRouter`를 사용하여 라우팅을 설정할 수 있음
  1. router에 `createBrowserRouter`를 사용하여 `router`를 생성
  2. index에 `RouterProvider`를 사용하여 `router`를 가져오고 라우팅을 설정
  3. root에 해당하는 컴포넌트에 `Outlet`을 사용하여 children을 가져올 수 있음
- `errorElement`: 에러 페이지를 설정 할 수 있음 (v5에 없음)
- `useNavigate`: 라우터 이동 가능 (v5 `useHistory`와 비슷)
- `useParams`: url의 파라미터를 가져올 수 있음 (v5에도 있음)
- `useOutletContext`: Outlet의 context를 가져올 수 있음 (v5에 없음)
- `useLoaderData`: 라우트 loader에서 로드된 데이터에 접근할 수 있게 해줌. 라우터
  가 로드되기 전에 필요한 데이터를 미리 로딩하는 데 사용
- `Form`: `<form>` 태그의 확장, useActionData와 함께 사용.
