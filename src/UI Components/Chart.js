import React from "react";
import "./ChartBar.css";

const Chart = (props) => {
  let barvalue = "0%";

  const maxvalue = 10000;

  if (props.value > 0) {
    barvalue = (props.value / maxvalue) * 100 + "%";
  }

  return (
    <div>
      <div className="text-align">
        <div className="bar-background">
          <div className="bar" style={{ height: barvalue }}></div>
        </div>
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Chart;
