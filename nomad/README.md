# EXEM Study

https://nomadcoders.co/react-masterclass

- EXEM FE3팀 Study를 위해 들으며 정리.

## 1주차 - 2024.02.13 ~ 2024.02.26

### Styled Components

- 중복된 스타일 상속을 위해 props 및 styled() 사용 가능
- 동일한 스타일을 다른 태그로 변경할 때 `as` 사용
- `attrs`를 사용하여 기본 속성을 설정할 수 있음
- animation을 위해 `keyframes` 사용 가능
- 자식 컴포넌트의 스타일을 변경할 때 `${}` 사용
- `ThemeProvider`를 사용하여 테마를 설정할 수 있음
- `withComponent`를 사용하여 컴포넌트를 확장할 수 있음 (v4부터 `as` 도입 이후 잘
  안쓰게 됨)
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
  가 로드되기 전에 필요한 데이터를 미리 로딩하는 데 사용 (v5에 없음)
- `Form`: `<form>` 태그의 확장, `useActionData`와 함께 사용. (v5에 없음)

## 2주차 - 2024.02.27 ~ 2024.03.05

### Crpyto Tracker

- `createGlobalStyle`을 사용하여 전역 스타일을 설정
- `Link` to를 object로 설정하여 파라미터를 전달할 수 있음 (`useLocation`을 사용
  하여 접근 가능)
  - pathname: 이동할 경로
  - search: 쿼리스트링
  - state: 상태값
  - hash: 해시값
  - key: 라우트의 고유 식별자
  - V6에서는 달라짐
    - `to`에 `pathname`, `search`, `hash`만 사용 가능
    - `state`: attribute로 직접 전달
    - `reloadDocument`: `Link` 클릭 시 페이지를 새로고침할지 여부
    - `replace`: 브라우저의 히스토리 스택에 새 항목을 추가하지 않고 현재 항목을
      대체할지 여부
    - `preventScrollReset`: 페이지 이동 시에 스크롤을 유지할지 여부
    - `relative`: 상대 경로 여부
- react-query 사용을 위해서는 `QueryClientProvider`를 사용하여 `queryClient`를전
  달해야함
  - 사용은 `useQuery(queryKey, queryFn)`를 사용하여 데이터를 가져올 수 있음
  - 유연성과 확장성을 위해서 아래와 같은 방식 권장
    ```ts
    useQuery<Type>({
      queryKey: ['key', '...'],
      queryFn: async () => {
        ...
      },
    })
    ```
  - `ReactQueryDevtools`를 사용하여 쿼리를 확인할 수 있음
  - 데이터를 캐시해두는 것이 가능하여 다른 페이지 갔다가 돌아와도 데이터를 다시
    불러오지 않음 (cacheTime에 따라 다름)
  - staleTime: 데이터가 적힌 시간동안 만료되기 전까지 캐시된 데이터를 사용. (기
    본값: 0)
  - gcTime: 데이터와 캐시를 얼마나 보관할지. (기본값: 5분) (v5전에는 cacheTime)
  - isLoading vs isPending
    - isLoading: 쿼리가 비활성화 됐다고해서 True가 되지 않음.
    - isPending: 쿼리가 비활성화 되어도 True가 됨.
  - 낙관적 업데이트: 서버로부터 응답을 받기 전에 UI를 업데이트하는 것.
    - useMutation의 onMutate를 사용하여 구현.
      - cancelQueries: 명시한 키에 대해 나가는 쿼리가 있는 경우 해당 쿼리를 취소
      - getQueryData: 현재 저장된 쿼리 데이터를 가져옴.
      - setQueryData: 쿼리 데이터를 업데이트하고 캐시를 업데이트함.
    - 실패 시 rollback을 위해 useQuery의 onError를 사용하여 구현.
    - onSettled: mutation이 완료될 때 마다 호출됨.
  - router와 연계
    - fetchQuery: useQuery와 유사하게 동작하며, 라우터의 loader에서 사용할 수있
      음.

**참고**

- `createGlobalStyle` 안에서 `@import`를 사용할 경우, `react-helmet`을 사용하거
  나 index.html의 `head`에 직접 추가 해야함.
- `react-helmet`을 사용할 경우 index.tsx에 StrictMode를 사용하면 안됨.
  - StrictMode를 없애거나, `react-helmet-async`를 사용하여 해결 가능.
  - `react-helmet`은 SSR을 지원하지 않음. `react-helmet-async`를사용하면 SSR을지
    원함.

**팁**

- API에서 타입을 가져올 때, `Object.values()`를 사용하여 key를 가져오고,  
  `Object.values().map(v => typeof v).join()`을 사용하여 value의 타입을 가져오는
  편리한 방법이 있음.
