import React from "react";
import Chart from "./Chart";

const ChartBar = (props) => {
  return (
    <div className="bar-align">
      {props.chartdata.map((ele) => {
        return <Chart key={ele.label} label={ele.label} value={ele.value} />;
      })}
    </div>
  );
};

export default ChartBar;
