import { atom, selector } from 'recoil';

export enum Categories {
  TO_DO = 'TO_DO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

const categoryState = atom<IToDo['category']>({
  key: 'category',
  default: Categories.TO_DO,
});

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export { categoryState, toDoState, toDoSelector };
