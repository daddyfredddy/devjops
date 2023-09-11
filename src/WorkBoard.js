import React from "react";
import data from "./data/data.json";
import images from "./data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars} from "@fortawesome/free-solid-svg-icons";

function WorkBoard() {
  return (
    <div>
      <body>
        <div className="container">
          <div className="nav">
            <h3>devjobs</h3>
            <icon><FontAwesomeIcon icon={faBars} /></icon>
          </div>

          <div className="cards">
            {data.map((item) => (
              <div key={item.id} className="card">
                <img src={item.logo} alt={item.company} className="img" />
                <p id="text1">
                  {item.postedAt} . {item.contract}
                </p>
                <h6 id="text3">{item.position}</h6>
                <p id="text4">{item.company}</p>
                <h4 id="text5">{item.location}</h4>
              </div>
            ))}
          </div>
        </div>
        <button id="btn">Load More</button>
      </body>
    </div>
  );
}

export default WorkBoard;
