import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { title: 'Toilet Paper', amount: 12.94, date: new Date(2021, 5, 12) },
  { title: 'New TV', amount: 799.49, date: new Date(2021, 5, 12) },
  { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 8, 12) },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}
