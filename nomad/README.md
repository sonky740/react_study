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
