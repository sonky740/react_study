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