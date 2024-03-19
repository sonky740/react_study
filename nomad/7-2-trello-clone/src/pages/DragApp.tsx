import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import DragabbleCard from '@/components/DragabbleCard';

export default function DragApp() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((prev) => {
      const newToDos = [...prev];
      const [removed] = newToDos.splice(source.index, 1);
      newToDos.splice(destination.index, 0, removed);
      return newToDos;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {({ innerRef, droppableProps, placeholder }) => (
              <Board ref={innerRef} {...droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} toDo={toDo} index={index} />
                ))}
                {placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  min-height: 200px;
  padding: 30px 10px 20px;
  background-color: ${({ theme }) => theme.boardColor};
  border-radius: 8px;
`;
