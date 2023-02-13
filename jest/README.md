## TDD (Test Driven Development)

- 코드 작성 전에 테스트를 작성하고 테스트에 통과하도록 코드를 작성하는 것. (레
  드-그린 테스트)
- 코드 작성 전에 테스트에 실패하는 레드 테스트를 먼저 실행하고 => 코드 작성 후에
  는 통과하는 테스트로 그린 테스트를 확인한다.

## Why TDD?

- 테스트를 작성하는 것이 프로세스의 한 부분으로 느끼는 방식에 차이가 있기 때문.
  (마지막에 해야 하는 따분한 일이 아니라 코딩 프로세스의 일부)
- 효율적. 코드 작성 전에 테스트를 작성하면 변경 후에 자동으로 다시 실행할 수 있
  기때문.

## BDD (Behavior Driven Development)

- 다양한 역할군의 협업이 필요한 프로젝트에서 효과적인 소프트웨어 개발을 위한방법
  론. (개발자가 아닌 사람들과의 소통을 위해 사용)

## RTL (React Testing Library)

- 테스트를 위한 가상 DOM을 생성하고 DOM과 상호작용하기 위한 유틸리티도 제공.
- 브라우저 없이 테스트 가능.

## 테스트 유형

- Unit tests(단위 테스트): 보통 함수나 별개의 React 컴포넌트 콛의 한 유닛 혹은단
  위를 테스트
- Integration tests(통합 테스트): 유닛 간의 상호작용, 여러 컴포넌트를 통합하여테
  스트
- Functional tests(기능 테스트): 소프트웨어의 특정 기능 테스트. 동작을 테스트.
  사용자 관점에서 테스트
- End-to-end tests(End-to-end 테스트): 사용자 관점에서 테스트. 사용자가 실제로사
  용하는 것처럼 테스트

## 유닛 테스트 vs 기능 테스트

- 유닛 테스트: 테스트를 최대한 격리시킴. 함수나 컴포넌트를 테스트할 때 의존성을
  표시. 즉, 다른 의존성이 있거나 컴포넌트가 의존하는 다른 함수가 있으면 실제 버
  전 대신 테스트 버전을 사용. 테스트를 실패하면 어디서 실패했는지 알기 쉬움.
  but, 사용자가 소프트웨어와 상호 작용하는 방식과는 거리가 멂. 리팩토링에도 취약
  .
- 기능 테스트: 테스트하는 특정 동작이나 유저 플로우와 연관된 모든 단위를 포함.
  사용자가 소프트웨어와 상호 작용하는 방식과 밀접. 리팩토링에도 강함. but, 테스
  트를 실패하면 어디서 실패했는지 알기 어려움.

## 접근성 https://testing-library.com/docs/queries/about/#priority

모든 사람이 액세스 가능한 쿼리
- getByRole: 사용자에게 가장 중요한 역할을 가진 요소를 가져옴. (ex. button,
  link)
- getByLabelText: label과 연결된 요소를 가져옴. (ex. input, textarea)
- getByText: 텍스트를 포함하는 요소를 가져옴. (ex. button, link, span, p)
- getByDisplayValue: 사용자에게 보여지는 값과 일치하는 요소를 가져옴. (ex.
  input, textarea)

스크린 리더와 같은 보조기술을 사용하는 사람을 위한 쿼리
- getByAltText: alt 속성을 가진 요소를 가져옴. (ex. img, area, input)
- getByTitle: title 속성을 가진 요소를 가져옴. (ex. svg)

사용자가 볼 수 없고, 스크린 리더도 읽지 못하는 쿼리
- getByTestId: data-testid 속성을 가진 요소를 가져옴. (ex. div, span)

## Jest 단언

expect: 전역 메소드

## matcher

- toBeInTheDocument: DOM에 존재하는지 확인
- toBe: 값이 같은지 확인
- toHaveLength: 배열의 길이가 같은지 확인
