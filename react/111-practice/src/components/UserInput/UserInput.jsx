import { useState } from 'react';
import styles from './UserInput.module.css';

const INIT_USER_INPUT = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

export default function UserInput({ onCalculate }) {
  const [userInput, setUserInput] = useState(INIT_USER_INPUT);
  console.log('a');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onCalculate(userInput);
  };

  const onResetHandler = () => {
    setUserInput(INIT_USER_INPUT);
  };

  const onInputChangeHandler = (input, value) => {
    setUserInput((prevState) => ({
      ...prevState,
      [input]: +value,
    }));
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(e) =>
              onInputChangeHandler('current-savings', e.target.value)
            }
            value={userInput['current-savings']}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(e) =>
              onInputChangeHandler('yearly-contribution', e.target.value)
            }
            value={userInput['yearly-contribution']}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(e) =>
              onInputChangeHandler('expected-return', e.target.value)
            }
            value={userInput['expected-return']}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(e) => onInputChangeHandler('duration', e.target.value)}
            value={userInput['duration']}
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={onResetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
