import type { MouseEvent } from 'react';
import { type IToDo, Categories } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '@/recoil/atoms';

export default function Todo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onToDoChange = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as Categories;
    setToDos((oldToDos) => {
      return oldToDos.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            category: name,
          };
        }
        return toDo;
      });
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button type="button" name={Categories.TO_DO} onClick={onToDoChange}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button type="button" name={Categories.DOING} onClick={onToDoChange}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button type="button" name={Categories.DONE} onClick={onToDoChange}>
          Done
        </button>
      )}
    </li>
  );
}
