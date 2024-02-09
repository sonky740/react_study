import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box />
      <Title>Hello</Title>
      <Circle bgColor="tomato" />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor || 'teal'};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

export default App;
