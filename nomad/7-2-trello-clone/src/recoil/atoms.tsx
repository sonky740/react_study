import { atom } from 'recoil';

export interface ToDo {
  id: number;
  text: string;
}

interface TodoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<TodoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    Doing: [],
    Done: [],
  },
});
