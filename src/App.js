import React, { useState } from "react";
import "./app.css";
import Expense from "./Components/Expense";
import NewExpense from "./Components/NewExpense";

const App = () => {
  const [render, setrender] = useState(false);

  return (
    <div>
      <NewExpense render={render} set={setrender} />
      <Expense render={render} />
    </div>
  );
};

export default App;
