import React from "react";
import data from "./data/data.json";

function WorkBoard() {
  return (
    <div className="container">
      <div className="nav">
        <h3>devjobs</h3>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.postedAt}
            {item.contract}
            <h6>{item.position}</h6>
            {item.company}
            {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkBoard;
