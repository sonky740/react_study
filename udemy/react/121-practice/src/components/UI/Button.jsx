import styles from './Button.module.css';

export default function Button({ type, children, onClick }) {
  return (
    <button type={type || 'button'} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
