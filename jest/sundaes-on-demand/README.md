# 복습 & 정리

## screen query methods

getByTestId: 이 메서드는 데이터-testid 속성으로 요소를 찾으며, 이 속성은 일반적
으로 테스트 목적으로 UI에서 요소를 식별하는 데 사용.

getByText: 이 메서드는 텍스트 콘텐츠로 요소를 찾으며, 이 메서드를 사용하여 화면
에서 특정 텍스트를 찾을 수 있음

getByRole: 이 메서드는 역할 속성으로 요소를 찾으며, 역할 속성은 화면에서 요소의
용도를 설명하는 데 사용(예: "버튼", "링크", "제목").

getByPlaceholderText: 이 메서드는 플레이스홀더 텍스트로 입력 요소를 찾음.

queryByTestId, queryByText, queryByRole, queryByPlaceholderText: 이러한 메서드는
"get" 메서드와 비슷하게 작동하지만 요소를 찾을 수 없는 경우 오류를 발생시키는 대
신 null을 반환.

getAllByTestId, getAllByText, getAllByRole, getAllByPlaceholderText: 이 메서드는
쿼리와 일치하는 모든 요소를 찾아 요소 배열을 반환.

findByTestId, findByText, findByRole, findByPlaceholderText: 이러한 메서드는 비
동기식이며 요소가 발견되면 해결되는 프로미스를 반환.

## fireEvent => userEvent

- userEvent로 가져온 모든 메서드는 프로미스로 반환함. (await 필요)
