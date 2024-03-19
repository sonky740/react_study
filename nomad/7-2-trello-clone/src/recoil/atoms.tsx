import { atom } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: ['one', 'two', 'three', 'four', 'five'],
});
