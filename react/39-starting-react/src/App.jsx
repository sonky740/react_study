import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';

const initialExpenses = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { title: 'Toilet Paper', amount: 12.94, date: new Date(2021, 5, 12) },
  { title: 'New TV', amount: 799.49, date: new Date(2021, 5, 12) },
  { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 8, 12) },
];

export default function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => ([
      expense,
      ...prevState,
    ]))
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}
