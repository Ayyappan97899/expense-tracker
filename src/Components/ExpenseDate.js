import React from "react";
import "./ExpenseItem.css";

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-us", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-us", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
