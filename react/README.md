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
- 상태 변경이 발생되면 컴포넌트 전체가 재실행되고, 재평가됨. (자식 컴포넌트도 재실행, 재평가 됨.)
  - memo를 사용하면 props가 변경되지 않으면 재실행, 재평가 되지 않음.
    - 하지만 memo는 변경이 발생할 때마다 해당 컴포넌트의 기존 props값과 새로운 props값을 비교함.
    - 먼저 기존의 props 값을 저장할 공간이 필요하고, 비교하는 작업도 필요. 이 각각의 작업은 개별적인 성능 비용이 발생.
    - 자식 컴포넌트가 많아서 컴포넌트 트리가 매우 크다면 유용하게 사용할 수 있음.
    - 원시값이 아닌 객체(함수), 배열을 props로 전달할 때는 memo를 사용해도 재실행, 재평가 됨.
  - useCallback: 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅
    - react에 해당 함수는 변경되지 않는다는 것을 알려주고 이전과 동일한 함수 객체임을 보장. 
    - useCallback으로 함수를 감싸고, 해당 함수를 자식 컴포넌트에 props로 전달하고 memo로 감싸면 재실행, 재평가 되지 않음.
    - 의존성 배열에 들어가는 값이 변경되면 함수가 새로 생성되고, 그렇지 않으면 이전 함수를 재사용.
  - useState와 useReducer는 처음 상태를 초기화한 후에 컴포넌트가 DOM에서 완전히 삭제되지 않는 이상 또 다시 초기화를 하지 않음.
  - useMemo: 모든 종류의 데이터를 저장.
    - 메모리를 사용하고 일정 성능을 사용함.
    - 객체, 배열같은 참조 타입의 값을 기억할 때 유용.

## 5주차 2023.11.14 ~ 2023.11.20
- 섹션 14 ~ 16
- react LifeCycle
  - Mounting: 컴포넌트가 DOM에 추가될 때
    - constructor: 컴포넌트가 생성될 때
    - getDerivedStateFromProps: 컴포넌트가 생성될 때와 업데이트될 때
    - render: 컴포넌트의 UI를 렌더링
    - componentDidMount: 컴포넌트가 DOM에 추가된 후 호출 (=== useEffect(..., []))
  - Updating: 컴포넌트가 업데이트될 때
    - getDerivedStateFromProps: 업데이트 시작 전에 호출
    - shouldComponentUpdate: 컴포넌트가 업데이트될 때 호출
    - render: 컴포넌트의 UI를 렌더링
    - getSnapshotBeforeUpdate: 업데이트 직전의 상태를 포착
    - componentDidUpdate: 업데이트 후에 호출 (=== useEffect(..., [state]))
  - Unmounting: 컴포넌트가 DOM에서 제거될 때
    - componentWillUnmount: 컴포넌트가 제거되기 전에 호출 (=== useEffect(return () => {...}, []))
  - Error Handling: 컴포넌트에서 에러가 발생했을 때
    - getDerivedStateFromError: 에러 발생 후에 호출, 에러로 인한 상태 변화를 처리
    - componentDidCatch: 에러 정보를 캡처
  - React 17부터는 더 이상 사용되지 않는 메서드들이 있음.
    - componentWillMount
    - componentWillReceiveProps
    - componentWillUpdate
- Error Boundary처리는 컴포넌트 트리의 어디에서든 에러를 처리할 수 있음.
  - Error Boundary는 클래스 컴포넌트로만 사용 가능.
  - 함수형 컴포넌트에서는 라이브러리를 사용하거나 클래스 컴포넌트로 사용.