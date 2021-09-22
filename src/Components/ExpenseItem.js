import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-card">
        <div className="card-body">
          <ExpenseDate date={props.date} />
          <h2 className="title">{props.title}</h2>
          <div className="amount-background">
            <p className="amount">${props.amount}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
