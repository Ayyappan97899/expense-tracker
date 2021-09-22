import React from "react";
import ChartBar from "../UI Components/ChartBar";
import "../UI Components/Chart.css";
const ExpenseChart = (props) => {
  const chartData = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  let sum = 0;
  for (let d of props.yearData) {
    const month = new Date(d.date).getMonth();
    chartData[month].value = sum += +d.amount;
  }

  return (
    <div className="chart-card">
      <ChartBar chartdata={chartData} />
    </div>
  );
};

export default ExpenseChart;
