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
          <div key={item.id}>
            <img src=""/>
            <p>{item.postedAt}</p>
            <p>{item.contract}</p>
            <h6>{item.position}</h6>
            <p>{item.company}</p>
            <h4>{item.location}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default WorkBoard;
