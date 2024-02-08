import { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import styles from './Expense.module.css';
import ExpensesChart from './ExpensesChart';

export default function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear || filteredYear === 'All';
  })

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
