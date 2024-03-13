import { useForm } from 'react-hook-form';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { toDoState, categoryState } from '@/recoil/atoms';
import styled from 'styled-components';

interface IForm {
  toDo: string;
}

export default function CreateTodo() {
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>({
    defaultValues: {
      toDo: '',
    },
  });

  const onValid = (data: IForm) => {
    console.log('add to do', data.toDo);
    setToDos((oldToDos) => [
      { id: Date.now(), text: data.toDo, category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  const toDo = register('toDo', {
    required: 'To Do is required',
  });

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input {...toDo} placeholder="Please write a To Do" />
      <button>Add</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
`;
