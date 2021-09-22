import React from "react";
import "./AddExpense.css";

function AddExpense(props) {
  const showHandler = () => {
    props.state(true);
  };
  return (
    <div className="form-card">
      <div className="align-btn">
        <button className="add-btn" onClick={showHandler}>
          Add New Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
