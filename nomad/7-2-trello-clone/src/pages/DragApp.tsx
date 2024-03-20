import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import Board from '@/components/Board';

export default function DragApp() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      setToDos((prev) => {
        const newToDo = [...prev[source.droppableId]];
        const [removed] = newToDo.splice(source.index, 1);
        newToDo.splice(destination.index, 0, removed);
        return {
          ...prev,
          [source.droppableId]: newToDo,
        };
      });
    } else {
      setToDos((prev) => {
        const startToDo = [...prev[source.droppableId]];
        const finishToDo = [...prev[destination.droppableId]];
        const [removed] = startToDo.splice(source.index, 1);
        finishToDo.splice(destination.index, 0, removed);
        return {
          ...prev,
          [source.droppableId]: startToDo,
          [destination.droppableId]: finishToDo,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
