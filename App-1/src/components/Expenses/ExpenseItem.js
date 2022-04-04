import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import "./ExpenseItem.css";

//Instead of title, date, amount we can simply use props for all 3 as function parameters.
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
