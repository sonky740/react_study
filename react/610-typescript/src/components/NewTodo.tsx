import { useRef, useContext, type FormEvent } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    addTodo(enteredText!);
    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
