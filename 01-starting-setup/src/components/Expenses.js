import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({items}) {
  return (
    <Card className="expenses">
      {items.map((el, i) => (
        <ExpenseItem key={i} title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
}

export default Expenses;
