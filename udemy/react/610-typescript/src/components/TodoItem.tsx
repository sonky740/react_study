import styles from './TodoItem.module.css';

interface Props {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<Props> = ({ text, onRemoveTodo }) => {
  return (
    <li className={styles.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
