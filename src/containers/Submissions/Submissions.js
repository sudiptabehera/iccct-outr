import React, { useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import "./submission.css";

function Submissions() {
  const [component, updateComponent] = useState(<StepA />);
  const [isActive, setActive] = useState("Step&nbsp;A");

  return (
    <div className="submissions section__padding" style={{ color: "white" }} id="submission">
      <div className="heading">
        <h1 className="gradient__text">SUBMISSION</h1>
        <p>
        1st International Conference on Communication and Computational
            Techniques (ICCCT-2022)
        </p>
      </div>

      <div className="submissions-container">
        <div className="left ">
          <ul>
            <li>
              <button
                
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<StepA />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Step&nbsp;A"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
                Step&nbsp;A
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<StepB />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Step&nbsp;B"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
                Step&nbsp;B
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<StepC />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Step&nbsp;C"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
                Step&nbsp;C
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<StepD />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Step&nbsp;D"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
                Step&nbsp;D
              </button>
            </li>
          </ul>
        </div>

        <div className="right" id="component-content">{component}</div>
      </div>
    </div>
  );
}

export default Submissions;
