import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface Props {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: Props) {
  return (
    <Draggable draggableId={toDo} index={index}>
      {({ innerRef: dragInnerRef, dragHandleProps, draggableProps }) => (
        <Card ref={dragInnerRef} {...dragHandleProps} {...draggableProps}>
          <span>😊</span>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Memorized = memo(DragabbleCard);
export default Memorized;

const Card = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.cardBgColor};
  border-radius: 8px;

  & + & {
    margin-top: 4px;
  }
`;
