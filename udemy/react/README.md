# EXEM Study

https://www.udemy.com/course/best-react/

- EXEM FE3팀 Study를 위해 다시 들으며 정리 필요.
- 내가 개인적으로 들었던 예전 강의는 backup/2022 폴더에 보관.
- 2023년 10월 16일부터 다시 듣고 정보 공유 예정.

## 1주차 - 2023.10.16 ~ 2023.10.23

- 섹션 3 ~ 섹션 5
- 리액트는 선언형 프로그래밍.
- React 18버전부터는 최상단에 React 선언할 필요 없음.
- useState로 이전 상태에 의존적인 변경을 해야한다면 함수형 업데이트를 사용해야한
  다. (ex. setCount(prevCount => prevCount + 1))
  - 오래되었거나 잘못된 상태 스냅샷을 사용하는 것을 방지하기 위해.
  - 위처럼 함수형 업데이트를 사용하면 최신 상태를 보장할 수 있다.
  - useState 업데이트 시 연관된 일반 변수를 반응형처럼 체크 가능.

## 2주차 - 2023.10.24 ~ 2023.10.31

- 섹션 6 ~ 섹션 9

## 3주차 - 2023.10.31 ~ 2023.11.06

- 섹션 10 ~ 섹션 11
- vue의 Teleport === react-dom의 createPortal
- vue의 DOM ref === react의 useRef (useRef는 current 프로퍼티로 접근 가능)
  - useState를 사용하면 제어 컴포넌트라고 부를 수 있음.
  - useRef를 사용하면 비제어 컴포넌트라고 부를 수 있음. (useState를 안 썼다면)
  - 제어 컴포넌트는 항상 최신값을 유지하기 때문에 불필요한 렌더링이 발생할 수 있
    음.
  - 이건 vue에서도 마찬가지지만, react에서는 제어 컴포넌트 전체를 리렌더링 하기
    때문에 좀 더 유의해야함.
- useEffect
  - []: vue의 onMounted
  - [state]: vue의 watch
  - cleanup 함수: vue의 onUnmounted, 그러나 react에서의 cleanup은 의존성 배열에
    있는 값이 변경되기 직전에 실행되기도 함.
- useReducer
  - useState의 대체제로 사용 가능.
  - 각 컴포넌트에서 쓰이는 vuex라고 생각하면 됨.
- useImperativeHandle
  - 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출할 수 있음.
  - 캡슐화 위배
  - 상향식(top-down) 데이터 흐름 방해
  - 유지보수 어려움
  -

## 4주차 2023.11.07 ~ 2023.11.13

- 섹션 12 ~ 13
- 상태 변경이 발생되면 컴포넌트 전체가 재실행되고, 재평가됨. (자식 컴포넌트도 재
  실행, 재평가 됨.)
  - memo를 사용하면 props가 변경되지 않으면 재실행, 재평가 되지 않음.
    - 하지만 memo는 변경이 발생할 때마다 해당 컴포넌트의 기존 props값과 새로운
      props값을 비교함.
    - 먼저 기존의 props 값을 저장할 공간이 필요하고, 비교하는 작업도 필요. 이 각
      각의 작업은 개별적인 성능 비용이 발생.
    - 자식 컴포넌트가 많아서 컴포넌트 트리가 매우 크다면 유용하게 사용할 수 있음
      .
    - 원시값이 아닌 객체(함수), 배열을 props로 전달할 때는 memo를 사용해도 재실
      행, 재평가 됨.
  - useCallback: 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅
    - react에 해당 함수는 변경되지 않는다는 것을 알려주고 이전과 동일한 함수 객
      체임을 보장.
    - useCallback으로 함수를 감싸고, 해당 함수를 자식 컴포넌트에 props로 전달하
      고 memo로 감싸면 재실행, 재평가 되지 않음.
    - 의존성 배열에 들어가는 값이 변경되면 함수가 새로 생성되고, 그렇지 않으면이
      전 함수를 재사용.
  - useState와 useReducer는 처음 상태를 초기화한 후에 컴포넌트가 DOM에서 완전히
    삭제되지 않는 이상 또 다시 초기화를 하지 않음.
  - useMemo: 모든 종류의 데이터를 저장.
    - 메모리를 사용하고 일정 성능을 사용함.
    - 객체, 배열같은 참조 타입의 값을 기억할 때 유용.
  - useCallback과 useMemo의 차이
    - useCallback
      - 함수를 메모이제이션하여 재사용
      - 함수를 반환
      - 함수를 생성하는 로직을 콜백 함수에 작성
      - 자주 렌더링되는 컴포넌트에서 함수를 최적화하고, 불필요한 함수 재생성을방
        지하는데 사용. (ex: 자식 컴포넌트에 전달되는 콜백 함수를 최적화)
    - useMemo
      - 값을 메모이제이션하여 재사용
      - 값을 반환
      - 값을 계산하는 로직을 콜백 함수에 작성
      - 계산 비용이 큰 연산을 최적화하는 데 사용. (ex: 배열이나 객체와 같은 큰데
        이터를 가공하거나 복잡한 계산을 수행하는 경우)
    - useCallback과 useMemo 모두 의존성 배열을 사용하여 의존성이 변경되었을 때만
      함수를 재생성하거나 값을 재계산.

## 5주차 2023.11.14 ~ 2023.11.20

- 섹션 14 ~ 16
- react LifeCycle
  - Mounting: 컴포넌트가 DOM에 추가될 때
    - constructor: 컴포넌트가 생성될 때
    - getDerivedStateFromProps: 컴포넌트가 생성될 때와 업데이트될 때
    - render: 컴포넌트의 UI를 렌더링
    - componentDidMount: 컴포넌트가 DOM에 추가된 후 호출 (=== useEffect(...,
      []))
  - Updating: 컴포넌트가 업데이트될 때
    - getDerivedStateFromProps: 업데이트 시작 전에 호출
    - shouldComponentUpdate: 컴포넌트가 업데이트될 때 호출
    - render: 컴포넌트의 UI를 렌더링
    - getSnapshotBeforeUpdate: 업데이트 직전의 상태를 포착
    - componentDidUpdate: 업데이트 후에 호출 (=== useEffect(..., [state]))
  - Unmounting: 컴포넌트가 DOM에서 제거될 때
    - componentWillUnmount: 컴포넌트가 제거되기 전에 호출 (=== useEffect(return
      () => {...}, []))
  - Error Handling: 컴포넌트에서 에러가 발생했을 때
    - getDerivedStateFromError: 에러 발생 후에 호출, 에러로 인한 상태 변화를 처
      리
    - componentDidCatch: 에러 정보를 캡처
  - React 17부터는 더 이상 사용되지 않는 메서드들이 있음.
    - componentWillMount
    - componentWillReceiveProps
    - componentWillUpdate
- Error Boundary처리는 컴포넌트 트리의 어디에서든 에러를 처리할 수 있음.
  - Error Boundary는 클래스 컴포넌트로만 사용 가능.
  - 함수형 컴포넌트에서는 라이브러리를 사용하거나 클래스 컴포넌트로 사용.
- custom hooks을 만들 때 `use`라는 접두사를 붙여야함.
  - 리액트에게 이 함수가 커스텀 훅임을 알려주며, 해당 함수를 훅의 규칙에 맞게 쓴
    다고 보장함.
  - 외부 의존성 문제 때문에 커스텀 훅 내에 있는 함수에 파라미터를 전달하는 방식
    으로 하는게 편할 듯.

## 6주차 2023.11.21 ~ 2023.11.27

- 섹션 17 ~ 18
- ref로 input의 value를 제어하는건 지양.

## 7주차 2023.11.28 ~ 2023.12.04

- 섹션 19 ~ 20
- Context API vs Redux
  - Context는 설정이 복잡해질 수 있음. (중첩되는 Context)
  - 데이터가 자주 변경되는 경우에는 Context의 성능 이슈가 있음.
- Redux
  - Redux는 단 하나의 저장소만 가질 수 있음. (Vuex와 비슷) **vs vuex**
    - redux는 단일 상태 트리, 모든 상태 변화는 순수 함수인 리듀서를 통해 이루어
      짐
    - vuex는 단일 상태 트리, vue의 반응성 시스템을 사용하여 상태 변화 감지
    - redux는 엄격한 단방향 데이터 흐름을 따름, 상태는 불변성을 유지해야하며, 액
      션을 통해서만 상태를 변경.
    - vuex는 단반향 데이터 흐름을 따르지만, vue의 반응성 시스템 덕분에 상태변화
      를 더 쉽게 할 수 있음.
  - 데이터를 직접 변경할 수 없음. (불변성 유지)
  - useSelector, useDispatch를 사용하여 데이터를 가져오고, 변경함.
  - @reduxjs/toolkit은 내부적으로 immer를 사용하여 불변성을 유지하기 때문에 원본
    상태를 직접 변경해도 무방함.
  - 무조건 동기식이여야 함.
  - redux-thunk: 비동기 처리를 위한 미들웨어
    - redux-thunk는 액션 생성 함수에서 일반 객체를 반환하는 대신에 함수를 반환하
      도록 만들어줌.
  - ducks 패턴: 액션 타입, 액션 생성 함수, 리듀서를 한 파일에 작성하는 패턴.
    - 보편적으로 ducks 패턴을 사용함. (createSlice를 사용하면 자연스럽게 ducks
      패턴을 사용하게 됨.)

## 8주차 2023.12.06 ~ 2023.12.11

- 섹션 21
- react-router-dom
  - method: Form, json, useNavigate, useNavigation, useActionData,
    useLoaderData, useRouteLoaderData, useFetcher, Await, ...
    - Form: `<form>` 태그의 확장, useActionData와 함께 사용.
    - useNavigate: 기존의 useHistory와 비슷, 라우터 이동
    - useNavigation: 현재 상태 추적
    - useActionData: `<Form>`을 통해 서버로부터 받은 응답 데이터를 가져옴.
    - useLoaderData: 라우트 loader에서 로드된 데이터에 접근할 수 있게 해줌. 라우
      터가 로드되기 전에 필요한 데이터를 미리 로딩하는 데 사용
    - useFetcher: 비동기 요청을 관리하는 데 사용. 서버에 데이터를 전송하고 응답
      을 처리 할 수 있음.
    - Await: React 18의 `<Suspense>`와 함께 사용되며, 비동기 로딩 중인 데이터에
      대한 UI를 관리하는 데 사용.
  - 6.4 이전 버전에서는 JSX코드를 사용하여 라우팅 설정하였음.
    (createRoutesFromElements)
  - index: true === 첫 페이지로 설정
  - loader: 클라이언트에서 특정 라우트로 이동하기 전에 필요한 데이터를 미리 가져
    옴. 마치 SSR과 유사한 기능. vue의 beforeEnter, beforeRouteEnter와 비슷.
    useLoaderData로 데이터를 가져올 수 있음. 만약 상위 라우트에서 데이터를 가져
    온다면 router에 id를 추가하고 useRouteLoaderData로 가져올 수 있음.
  - action: 해당 페이지에서 실행할 액션을 설정

## 9주차 2023.12.12 ~ 2024.01.01

- 업무로 인해 스터디 일정 조정.
- 섹션 22 ~ 24
- 지연 로딩
  - router의 loader에 import를 사용하여 지연 로딩 가능.
  - lazy, Suspense를 사용하여 지연 로딩 가능.
  - Vue의 defineAsyncComponent와 비슷.
- Tanstack(react query)
  - HTTP 요청을 전송하고 프론트엔드 사용자 인터페이스를 백엔드 데이터와 동기화된
    상태로 유지하는 라이브러리.
  - 데이터 캐싱, 데이터 동기화, 오류 처리, 등에 대한 강점이 있음.
  - GET은 useQuery, POST는 useMutation을 사용.
  - staleTime: 데이터가 적힌 시간동안 만료되기 전까지 캐시된 데이터를 사용. (기
    본값: 0)
  - gcTime: 데이터와 캐시를 얼마나 보관할지. (기본값: 5분)
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

## 10주차 2024.01.16 ~ 2024.01.22

- 섹션 26 ~ 27
- framer-motion
  - 예전 GSAP를 사용했을 때보다 훨씬 편리하게 애니메이션을 구현할 수 있음.
  - initial: 초기 상태를 지정하여 변수 없이 애니메이션을 시작할 수 있음.
  - transition
    - type: spring (바운스), tween (일반)
    - stiffness: type이 spring일 때만 사용 가능. 강성. (기본값: 100)
  - AnimatePresence
    - DOM이 즉시 제거되는 걸 막고 exit 애니메이션을 실행할 수 있음.
    - 2개 이상 컴포넌트가 존재할 때는 key를 사용하여 구분해야함.
    - mode
      - sync(default): 이 컴포넌트 안에 있는 모든 애니메이션을 동시에 실행
      - wait: 이 컴포넌트 안에 있는 모든 애니메이션을 순차적으로 기다렸다가 실행
  - while~~: 사용자 인터랙션에 따라 애니메이션을 적용할 수 있음.
  - variants
    - 애니메이션을 재사용할 수 있게 변수로 지정할 수 있음.
    - 컴포넌트 안에 애니메이션을 트리거하는 데 쓰일 수도 있음.
    - 단, 중첩된 컴포넌트에서는 variants에서 선언한 애니메이션 변수를 사용할 수
      없음.
  - staggerChildren: 자식 컴포넌트의 애니메이션을 시작하는 시점의 차이를 줄 수있
    음.
  - useAnimation: 명령형 애니메이션을 사용할 수 있음.
  - layout: 레이아웃 변화에 따른 애니메이션을 적용할 수 있음.
  - layoutId: 페이지의 다른 위치에 있는 같은 layouId를 지닌 다른 요소가 렌더링되
    는 때를 자동을 감지해서 애니메이션을 적용 (ex: tab의 indicator)
  - key를 활용해서 데이터가 변경될 때 마다 애니메이션을 적용할 수 있음.
  - useScroll: 스크롤 위치에 따라 애니메이션을 적용할 수 있음.
  - useTransform: 애니메이션에 사용할 수 있는 값으로 전환.
- testing-library/react
  - describe: 테스트를 그룹화
  - it(test): 하나의 테스트를 정의
  - render: 컴포넌트를 렌더링
  - screen: DOM 요소에 접근하고 검증하는 데 사용
  - getBy~~: 특정 요소를 찾음. 요소가 없으면 에러를 발생
  - queryBy~~: 특정 요소를 찾음. 요소가 없으면 null을 반환
  - findBy~~: 비동기적으로 특정 요소를 찾음. 프로미스를 반환
  - expect: 테스트를 검증
  - jest.fn: 함수를 목업
    - jest.fn().mockResolvedValue: 비동기 함수를 목업
    - 목업을 활용하여 불필요한 API 호출을 방지할 수 있음.

## 11주차 2024.01.23 ~ 2024.01.29
  - 섹션 28
  - React.FC 지양?
    - 모든 컴포넌트에 children이 필요하지 않을 수 있음. 
      => (최근에는 더 이상 props 타입에 암묵적으로 포함되지 않고 명시적으로 선언해야 한다고 함.)
    - React 18 이전 버전에서는 React.ReactElement를 반환하여, 숫자나 문자열을 반환하면 에러 발생
      => Typescript 5.1, React 18 이후 버전에서는 React.ReactNode를 반환하여, 숫자나 문자열을 반환해도 에러 발생하지 않음.