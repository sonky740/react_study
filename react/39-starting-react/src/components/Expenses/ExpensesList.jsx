import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';

export default function ExpensesList({ items }) {
  if (items.length === 0) {
    return (
      <h2 className={styles.expensesList__fallback}>Found no expenses.</h2>
    );
  }

  return (
    <ul>
      {items.map((expense, index) => (
        <ExpenseItem
          key={`${expense.id}-${index}`}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
