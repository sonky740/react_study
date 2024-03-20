import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface Props {
  toDoId: number;
  toDoText: string;
  index: number;
}

interface CardProps {
  $isDragging: boolean;
}

function DragabbleCard({ toDoId, toDoText, index }: Props) {
  return (
    <Draggable draggableId={`${toDoId}`} index={index}>
      {(
        { innerRef: dragInnerRef, dragHandleProps, draggableProps },
        { isDragging }
      ) => (
        <Card
          $isDragging={isDragging}
          ref={dragInnerRef}
          {...dragHandleProps}
          {...draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

const Memorized = memo(DragabbleCard);
export default Memorized;

const Card = styled.div<CardProps>`
  padding: 10px;
  background-color: ${({ $isDragging, theme }) =>
    $isDragging ? '#74b9ff' : theme.cardBgColor};
  box-shadow: ${({ $isDragging }) =>
    $isDragging && '0 2px 5px 0 rgba(0, 0, 0, 0.2)'};
  border-radius: 8px;

  & + & {
    margin-top: 4px;
  }
`;
