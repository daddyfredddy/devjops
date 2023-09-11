import React from "react";
import data from "./data/data.json";
import images from "./data/data.json";

function WorkBoard() {
  return (
    <div>
      <body>
        <div className="container">
          <div className="nav">
            <h3>devjobs</h3>
          </div>

          <div className="cards">
            {data.map((item) => (
              <div key={item.id} className="card">
                <img src={item.logo} alt={item.company} />
                <p>{item.postedAt}</p>
                <p>{item.contract}</p>
                <h6>{item.position}</h6>
                <p>{item.company}</p>
                <h4>{item.location}</h4>
              </div>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default WorkBoard;
