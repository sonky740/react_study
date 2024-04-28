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

### Crpyto Tracker (React Router Dom, React Query)

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
  - refetchInterval: 데이터를 반복적으로 가져올 시간 간격 설정 (ms)
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

## 3주차 - 2024.03.19 ~ 2024.03.25

### State Management

- Recoil

  - Root에 `RecoilRoot`를 사용하여 전역 상태를 관리할 수 있음
  - `atom`을 사용하여 상태를 생성할 수 있음
    ```typescript
    export const minutesState = atom({
      key: 'minutesState',
      default: 0,
    });
    ```
  - `selector`를 사용하여 상태를 가져올 수 있음 === vue의 computed와 비슷

    ```typescript
    // 4주차에 나옴 (7 Trello Clone)
    export const hoursSelector = selector({
      key: 'hours',
      get: ({ get }) => {
        const minutes = get(minutesState);
        return Math.floor(minutes / 60);
      },
      set: ({ set }, newValue) => {
        set(minutesState, +newValue * 60);
      },
    });

    const [hours, setHours] = useRecoilState(hoursSelector);
    ```

  - `useRecoilState`를 사용하여 상태를 가져오고 변경할 수 있음
  - `useRecoilValue`를 사용하여 상태를 가져올 수 있음
  - `useSetRecoilState`를 사용하여 상태를 변경할 수 있음
  - `useResetRecoilState`를 사용하여 상태를 초기화할 수 있음

- react-hook-form
  - `useForm`을 사용하여 폼을 생성할 수 있음
  - `register`: 입력 컴포넌트에 등록시켜, 해당 필드의 값 변경, 유효성 검사, 폼제
    출 등을 관리 (name, onChange, onBlur, ref)
    ```typescript
    const { register } = useForm();
    <input
      {...register('email', {
        required: 'This input is required',
        maxLength: { value: 10, message: 'Max length is 10' },
        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
        validate: {
          noKy: (value) => value.includes('ky') || 'ky is required',
          noNico: (value) => !value.includes('nico') || 'nico is not allowed',
        },
      })}
    />;
    ```
  - `watch`: 입력 컴포넌트의 값을 감시하여, 해당 필드의 값 변경을 관리
    ```typescript
    const { watch } = useForm();
    const email = watch('email');
    ```
  - `handleSubmit`: 폼을 제출할 때 사용, data 인자로 폼의 데이터를 가져올 수 있
    음
    ```typescript
    const { handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <input type="submit" />
    </form>;
    ```
  - `formState`: 폼의 상태를 가져올 수 있음
    ```typescript
    const { formState } = useForm();
    console.log(formState.isDirty, formState.errors, formState.isValid);
    ```
  - `setError`: 폼의 에러를 설정할 수 있음
    ```typescript
    const { setError } = useForm();
    setError('email', { message: 'Invalid email' }, { shouldFocus: true });
    ```
  - `clearErrors`: 폼의 에러를 초기화할 수 있음
    ```typescript
    const { clearErrors } = useForm();
    clearErrors('email');
    ```

## 4주차 - 2024.03.26 ~ 2024.04.01

### Trello Clone

- react-beautiful-dnd
  - 업데이트 된지 2년... dnd-kit/core 추천
  - `DragDropContext`를 사용하여 드래그 앤 드롭을 설정할 수 있음
  - `Drappable`을 사용하여 드래그 가능한 영역을 설정할 수 있음
    - children은 함수여야함.
    - `provided`
      - `innerRef`로 ref 지정
      - `droppableProps`로 드롭 가능한 영역의 props 지정
      - `placeholder` 드래그 중에 영역의 크기가 변하지 않도록 설정
    - `snapshot`
      - `isDraggingOver`로 드래그 중인지 여부 확인
      - `draggingFromThisWith`로 현재 영역에서 드래그 중인지 여부, id 확인
  - `Draggable`을 사용하여 드래그 가능한 아이템을 설정할 수 있음
    - children은 함수여야함.
    - `provided`
      - `innerRef`로 ref 지정
      - `draggableProps`로 드래그 가능한 아이템의 props 지정
      - `dragHandleProps`로 어느 부분을 드래그할지 지정
    - `snapshot`
      - `isDragging`로 드래그 중인지 여부 확인
- Reredering
  - state가 변경될 때마다 컴포넌트가 리렌더링 되는 것을 방지하기 위해
    `React.memo`를 사용하여 컴포넌트를 래핑할 수 있음
    ```typescript
    function DragabbleCard({ toDo, index }: Props) {
      ...
    });
    const Memorized = memo(DragabbleCard);
    export default Memorized;
    ```
    Fast Refresh 관련 경고: `React.memo`를 사용하여 컴포넌트를 래핑할 때, 컴포넌
    트가 익명 함수로 내보내질 경우에 Fast Refresh가 제대로 동작하지 않을 수 있음
    . 따라서, `memo`로 감싸기 전에 컴포넌트를 변수에 담아서 내보내는 것을 권장함
    .
- styled-components에서만 사용할 attribute를 설정할 때 뜨는 에러는
  https://styled-components.com/docs/basics#passed-props 참고
  - $를 붙여서 사용하면 됨
- Challenge
  - local storage 활용
  - task 삭제 (쓰레기통)
  - 보드 순서 변경
  - 보드 생성

## 5주차 - 2024.04.02 ~ 2024.04.08

- Framer Motion
  - html 태그에 `motion` 접두사를 사용하여 애니메이션을 적용할 수 있음.
  - styled(motion.div)를 사용하여 styled-components와 함께 사용할 수 있음.
  - 메소드
    - `initial`: 초기 상태
    - `animate`: 애니메이션 상태
    - `exit`: 애니메이션 종료 상태
    - `whileHover`: hover 시 애니메이션
    - `whileTap`: tap 시 애니메이션
    - `transition`: 애니메이션 지속 시간, 지연 시간, 이징 함수를 설정할 수 있음.
      - `type`: `tween`, `spring`, `inertia`, `just`, `keyframes`
      - `duration`: 지속 시간 (s)
      - `delay`: 지연 시간 (s)
      - `ease`: 이징 함수
      - `stiffness`: spring 애니메이션의 강도
      - `damping`: spring 애니메이션의 진동
      - `mass`: inertia 애니메이션의 질량
      - `velocity`: inertia 애니메이션의 속도
      - `bounce`: inertia 애니메이션의 반동
      - `delayChildren`: 자식 요소의 애니메이션 지연 시간
      - `staggerChildren`: 자식 요소의 애니메이션 지연 시간 간격
      - props로 설정하여 각각의 스타일 프로퍼티에 애니메이션을 적용할 수 있음.
        ```tsx
        <motion.path
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 5 }, // fill만 5초 후에 애니메이션
          }}
        />
        ```
    - `variants`를 사용하여 애니메이션 상태를 객체로 설정할 수 있음.
      ```tsx
      const variants = {
        start: { scale: 0 },
        end: {
          scale: 1,
          rotateZ: 360,
          transition: { type: 'spring', delay: 0.5 },
        },
      };
      <Box variants={variants} initial={start} animate={end} />;
      ```
    - `drag`: boolean | 'x' | 'y'
      - `dragConstraints`: 드래그 제한 영역 (좌표를 넣을수도 있고, ref를 넣을 수
        도 있음)
      - `dragElastic`: 드래그 탄성
      - `dragMomentum`: 드래그 관성
      - `dragPropagation`: 드래그 전파
      - `dragTransition`: 드래그 애니메이션
      - `dragControls`: 드래그 컨트롤러
      - `dragListener`: 드래그 리스너
      - `dragSnapToOrigin`: 드래그 원점으로 스냅
    - `useMotionValue`: 애니메이션 수치를 추적할 수 있음
      - motionValue가 바뀌어도 컴포넌트가 리렌더링 되지 않음
      - `useMotionValueEvent`: motionValue를 추적하기 위한 이벤트
      - `set`: motionValue를 설정
    - `useTransform`: motionValue의 값에 따라서 다른 값을 반환할 수 있음
      ```tsx
      const x = useMotionValue(0);
      const scale = useTransform(x, [-800, 0, 800], [0.1, 1, 0.1]);
      ```
    - `useScroll`: 스크롤 위치를 추적할 수 있음
      - scrollX, scrollY, scrollXProgress(0 ~ 1), scrollYProgress(0 ~ 1)
    - `AnimatePresence`: 내부 요소 중에 사라졌다가 나타나는 요소의 애니메이션을
      적용할 때 사용, 내부 요소가 visible 상태여야 적용 가능
      ```tsx
      <AnimatePresence>
        {showing && (
          <Box variants={boxVariants} initial="initial" animate="visible" />
        )}
      </AnimatePresence>
      ```
      - `mode`:
        - `sync`(default)
        - `popLayout`(새기능: 레이아웃에서 벗어나는 자식요소들이 즉시 팝되어 애
          니메이션 됨)
        - `wait`(컴포넌트가 사라지는 것을기다림) (exitBeforeEnter)
    - `custom`: variants를 동적으로 설정하기 위한 속성
      ```tsx
      const boxVariants: Variants = {
        entry: (isBack: boolean) => ({
          x: isBack ? -500 : 500,
          opacity: 0,
          scale: 0,
        }),
        ...
      };
      ```
    - `layout`: 레이아웃이 변경되는 경우 자동으로 애니메이션 적용
      ```tsx
      <Wrapper onClick={toggleClicked}>
        <Box>
          <Circle layout />
        </Box>
      </Wrapper>
      ```
    - `layoutId`: 동일한 `layoutId`를 가진 여러 컴포넌트 간에 공유 레이아웃 전환
      모달 띄울 때 매우 강력할 듯
      ```tsx
      <Wrapper>
        <Grid>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} layoutId={`${i}`} onClick={() => onModal(i)} />
          ))}
        </Grid>
        <AnimatePresence>
          {id && (
            <Overlay
              variants={overlayVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            >
              <Box layoutId={`${id}`} />
            </Overlay>
          )}
        </AnimatePresence>
      </Wrapper>
      ```

## 6주차 - 2024.05.02

- Netflix Clone
  - 배운걸 토대로 Netflix Clone 프로젝트
  - Header Search 애니메이션을 framer 필요없이 css로 충분히 가능 (width: 0 =>
    width)
