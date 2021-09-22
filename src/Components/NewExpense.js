import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";

const Expense = (props) => {
  const [FormShow, setFormShow] = useState(false);

  // const savedExpenseData = (formData) => {
  //   const data = {
  //     ...formData,
  //     id: Math.random(),
  //   };
  //   props.finalData(data);
  // };
  return (
    <div>
      {!FormShow ? (
        <AddExpense state={setFormShow} />
      ) : (
        <ExpenseForm
          render={props.render}
          set={props.set}
          setform={setFormShow}
        />
      )}
    </div>
  );
};

export default Expense;
