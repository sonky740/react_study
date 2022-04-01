import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // 상태를 병합했을 때
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (e) => {
    // 이전 상태에 따라 상태가 업데이트 된다면... 이 함수 폼을 써야함.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // });
    // console.log(userInput);
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value }
    // });
    // console.log(userInput);
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value }
    // });
    // console.log(userInput);
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseDate);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
