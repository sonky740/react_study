import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ id, title, amount, date }) => {
  const [cTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle(`${title} New!!!`);
  };

  return (
    <Card className="expense-item" key={id}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{cTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
