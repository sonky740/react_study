import type { FormEvent } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, toDoSelector, Categories } from '@/recoil/atoms';
import CreateTodo from '@/components/CreateTodo';
import Todo from '@/components/Todo';

export default function ToDoList() {
  const filteredToDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onChangeFilter = (e: FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Categories);
    console.log(category);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onChangeFilter}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      <ul>
        {filteredToDos?.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
