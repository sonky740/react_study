import { forwardRef } from 'react';
import styles from './Input.module.css';

const DEFAULT_INPUT = {
  id: '',
  type: 'text',
};

const Input = forwardRef(({ label, input = DEFAULT_INPUT }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
