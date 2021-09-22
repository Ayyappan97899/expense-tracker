import React from "react";
import "./Filter.css";

const Filter = (props) => {
  const optionHandler = (event) => {
    props.onchangeHandler(event.target.value);
  };
  return (
    <div className="align-items">
      <label htmlFor="filter">Filter by year</label>
      <div className="filter-a">
        <select
          name="year"
          id="filter"
          value={props.selected}
          onChange={optionHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
