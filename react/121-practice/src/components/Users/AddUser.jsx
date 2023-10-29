import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

export default function AddUser({ onAddUser }) {
  const [enteredUserInfo, setEnteredUserInfo] = useState({
    username: '',
    age: '',
  });
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredUserInfo.username.trim().length === 0 ||
      enteredUserInfo.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredUserInfo.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    onAddUser(enteredUserInfo);

    setEnteredUserInfo({
      username: '',
      age: '',
    });
  };

  const initErrorHandler = () => {
    setError(null);
  }

  const userInfoChangeHandler = (e) => {
    setEnteredUserInfo((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      {error && <ErrorModal title={error.title} onClick={initErrorHandler}>{error.message}</ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userInfoChangeHandler}
            value={enteredUserInfo.username}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={userInfoChangeHandler}
            value={enteredUserInfo.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
