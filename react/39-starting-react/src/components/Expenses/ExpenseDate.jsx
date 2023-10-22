import styles from './ExpenseDate.module.css'

export default function ExpenseDate({ date }) {
  const month = date.toLocaleString('ko-kr', { month: 'long' });
  const day = date.toLocaleString('ko-kr', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDate__year}>{year}</div>
      <div className={styles.expenseDate__month}>{month}</div>
      <div className={styles.expenseDate__day}>{day}</div>
    </div> 
  );
}
