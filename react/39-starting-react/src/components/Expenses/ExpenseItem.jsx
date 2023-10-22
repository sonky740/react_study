import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import styles from './ExpenseItem.module.css';

export default function ExpenseItem({ title, amount, date }) {
  return (
    <Card className={styles.expenseItem}>
      <ExpenseDate date={date} />
      <div className={styles.expenseItem__description}>
        <h2>{title}</h2>
        <div className={styles.expenseItem__price}>${amount}</div>
      </div>
    </Card>
  );
}
