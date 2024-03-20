import { useForm } from 'react-hook-form';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DragabbleCard from '@/components/DragabbleCard';
import { toDoState, type ToDo } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';

interface Props {
  toDos: ToDo[];
  boardId: string;
}

interface ContentProps {
  $isDraggingOver: boolean;
  $isDraggingFromThis: boolean;
}

interface FormValues {
  toDo: string;
}

export default function Board({ toDos, boardId }: Props) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormValues>();
  const onValid = ({ toDo }: FormValues) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((prev) => ({
      ...prev,
      [boardId]: [newToDo, ...prev[boardId]],
    }));
    setValue('toDo', '');
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toDo', { required: true })}
          type="text"
          placeholder="grab me"
        />
        <button>Submit</button>
      </Form>
      <Droppable droppableId={boardId}>
        {(
          { innerRef, droppableProps, placeholder },
          { isDraggingOver, draggingFromThisWith }
        ) => (
          <Content
            $isDraggingOver={isDraggingOver}
            $isDraggingFromThis={!!draggingFromThisWith}
            ref={innerRef}
            {...droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {placeholder}
          </Content>
        )}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.boardColor};
  border-radius: 8px;
`;

const Content = styled.div<ContentProps>`
  flex: 1;
  padding: 20px;
  min-height: 0;
  background-color: ${({ $isDraggingOver, $isDraggingFromThis }) =>
    $isDraggingOver ? '#dfe6e9' : $isDraggingFromThis && '#b2bec3'};
  transition: background-color 0.3s;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  input,
  button {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;
