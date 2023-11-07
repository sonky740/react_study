import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

export default function MealItemForm({ id, onAddToCart }) {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false)
      return;
    }

    onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amout"
        type="text"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
