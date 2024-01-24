import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {items.map(({ id, text }) => (
        <TodoItem key={id} text={text} onRemoveTodo={() => removeTodo(id)} />
      ))}
    </ul>
  );
};

export default Todos;
