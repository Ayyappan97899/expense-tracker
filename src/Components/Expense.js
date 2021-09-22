import React, { useState, useEffect, Fragment } from "react";
import Filter from "./Filter";
import Card from "../UI Components/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const [expense, setExpense] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const FilterYear = (year) => {
    setFilterYear(year);
  };

  useEffect(() => {
    setisLoading(true);
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
      setisLoading(false);
    };

    fetchData();
  }, [props.render]);

  const selectedYearData = expense.filter((element) => {
    return new Date(element.date).getFullYear().toString() === filterYear;
  });

  const loading = <p className="loading">Loading....</p>;

  return (
    <Card>
      {isLoading && loading}
      {!isLoading && (
        <Fragment>
          <Filter selected={filterYear} onchangeHandler={FilterYear} />
          <ExpenseChart yearData={selectedYearData} />
          <ExpenseList items={selectedYearData} />
        </Fragment>
      )}
    </Card>
  );
};

export default Expense;
