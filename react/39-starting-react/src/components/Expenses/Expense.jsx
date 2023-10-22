import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import styles from './Expense.module.css';

export default function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {items.map((expense, index) => (
        <ExpenseItem
          key={`${expense.title}-${index}`}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
