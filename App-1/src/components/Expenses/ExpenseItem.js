import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import "./ExpenseItem.css";

//Instead of title, date, amount we can simply use props for all 3 as function parameters.
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item evaluated by react");

  // let title = props.title;

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
