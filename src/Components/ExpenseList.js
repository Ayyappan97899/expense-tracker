import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="no-item">Found no Expense</h3>;
  }
  return (
    <ul>
      {props.items.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            title={data.title}
            date={data.date}
            amount={data.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
