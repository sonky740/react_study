import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({items}) => {
  return (
    <Card className="expenses">
      {items.map((el, i) => (
        <ExpenseItem key={i} title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
}

export default Expenses;
