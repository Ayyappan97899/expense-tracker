import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const FormData = {
      title: title,
      amount: amount,
      date: date,
    };
    await fetch(
      "https://expense-tracker-d1e64-default-rtdb.firebaseio.com/Expense.json",
      {
        method: "POST",
        body: JSON.stringify(FormData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.set(!props.render);
    // props.savedData(FormData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const closeHandler = () => {
    console.log("close");
    props.setform(false);
  };

  return (
    <div className="form-card">
      <form onSubmit={submitHandler}>
        <div className="close-align">
          <button className="close" onClick={closeHandler}>
            close
          </button>
        </div>
        <div className="form-align">
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              onChange={titleHandler}
              value={title}
            />
          </div>
          <div className="align-amount">
            <label htmlFor="Amount">Amount</label>
            <br />
            <input
              type="number"
              id="Amount"
              onChange={amountHandler}
              value={amount}
            />
          </div>
          <div>
            <label htmlFor="Date">Date</label>
            <br />
            <input type="date" onChange={dateHandler} value={date} />
          </div>
        </div>
        <div className="align-button">
          <button type="submit" className="add-button">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
