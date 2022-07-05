import React, { useState } from "react";
import Patron from "./Patron";
import Convener from "./Convener";
import OrganisingChair from "./OganisingChair";
import FinanceChair from "./FinanceChair";
import PublicityChair from "./PublicityChair"
import AdvisoryCommittee from "./AdvisoryCommittee"
import InternationalCommittee from "./InternationalCommitee"
import OrganisingCommittee from "./OrganisingCommittee"
import Queries from "./Queries"

import "./committee.css";

function Committee() {
  const [component, updateComponent] = useState(<Patron />);
  const [isActive, setActive] = useState("Patron");

  return (
    <div className="submissions section__padding" style={{ color: "white" }} id="members">
      <div className="heading">
        <h1 className="gradient__text">Committee Members</h1>
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
                  updateComponent(<Patron />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Patron"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Patron
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<Convener/>);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Convener"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Convener
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<OrganisingChair />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Organising&nbsp;Chair"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Organising&nbsp;Chair
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<FinanceChair />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Finance&nbsp;Chair"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Finance&nbsp;Chair
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<PublicityChair />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Publicity&nbsp;Chair"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Publicity&nbsp;Chair
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<AdvisoryCommittee />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Advisory&nbsp;Committee"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
               Advisory&nbsp;Committee
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<InternationalCommittee />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "International&nbsp;Technical&nbsp;Program&nbsp;Committee"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          textAlign:"center",
                          overflowWrap: "break-word",
                          color:"black",
                          
                      }
                    : {overflowWrap: "break-word",}
                }
              >
                International&nbsp;Technical&nbsp;Program&nbsp;Committee
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<OrganisingCommittee />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Organising&nbsp;Committee"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                          
                      }
                    : {
                      
                    }
                }
              >
                Organising&nbsp;Committee
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateComponent(<Queries />);
                  setActive(e.target.innerHTML);
                }}
                style={
                  isActive === "Queries"
                    ? {
                        background:
                          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
                          color:"black",
                      }
                    : {}
                }
              >
                Queries
              </button>
            </li>
          </ul>
        </div>

        <div className="right ">{component}</div>
      </div>
    </div>
  );
}

export default Committee;
