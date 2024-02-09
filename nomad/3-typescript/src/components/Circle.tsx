// import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';

interface ContainerProps {
  bgColor?: string;
  borderColor?: string;
}

interface Props extends ContainerProps {
  children?: React.ReactNode;
}

export default function Circle({ bgColor, borderColor, children }: Props) {
  // const theme = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Container bgColor={bgColor} borderColor={borderColor || bgColor}>
      {children || `${bgColor || theme?.btnColor} circle`}
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid
    ${({ borderColor, bgColor, theme }) =>
      borderColor || bgColor || theme.btnColor};
  border-radius: 50%;
  background-color: ${({ bgColor, theme }) => bgColor || theme.btnColor};
`;
