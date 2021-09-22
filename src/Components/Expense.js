import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Card from "../UI Components/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const [expense, setExpense] = useState([]);

  const FilterYear = (year) => {
    setFilterYear(year);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://expense-tracker-d1e64-default-rtdb.firebaseio.com/Expense.json"
      );

      const resData = await response.json();

      const arr = [];

      for (let d in resData) {
        arr.unshift({
          id: d,
          title: resData[d].title,
          date: resData[d].date,
          amount: resData[d].amount,
        });
      }

      setExpense(arr);
    };

    fetchData();
  }, [props.render]);

  const selectedYearData = expense.filter((element) => {
    return new Date(element.date).getFullYear().toString() === filterYear;
  });

  return (
    <Card>
      <Filter selected={filterYear} onchangeHandler={FilterYear} />
      <ExpenseChart yearData={selectedYearData} />
      <ExpenseList items={selectedYearData} />
    </Card>
  );
};

export default Expense;
