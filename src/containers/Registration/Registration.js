import React, { useState } from "react";
import FeeStructure from "./FeeStructure";
import AccountDetails from "./Account Details";
import "./registration.css";

function Registration() {
  const [component, updateComponent] = useState(<FeeStructure />);
  const [isActive, setActive] = useState("Registration");

  return (
    <div className="submissions section__padding" style={{ color: "white" }} id="registration">
      <div className="heading">
        <h1 className="gradient__text">Registration</h1>
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
                  updateComponent(<FeeStructure />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Registration"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
                Registration
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<AccountDetails />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Account &nbsp; Details"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                      }
                    : {}
                }
              >
               Account &nbsp; Details
              </button>
            </li>
          </ul>
        </div>

        <div className="right ">{component}</div>
      </div>
    </div>
  );
}

export default Registration;
