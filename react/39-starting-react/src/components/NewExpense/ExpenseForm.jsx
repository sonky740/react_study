import { useState } from 'react';
import styles from './ExpenseForm.module.css';

export default function ExpenseForm({ onSaveExpenseData }) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '' || new Date().toISOString().slice(0, 10),
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  const userInputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={userInputHandler}
            name="enteredTitle"
            value={userInput.enteredTitle}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={userInputHandler}
            name="enteredAmount"
            value={userInput.enteredAmount}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={userInputHandler}
            name="enteredDate"
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className={styles.newExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
