import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({ isValid, id, label, type, value, onChange, onBlur }, ref) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={type === 'password' ? 'on' : ''}
      />
    </div>
  );
});

export default Input;
