import React, { useState } from "react";
import Queries from "./Queries";

import "./committee.css";
import CommitteeHeading from "./CommitteeHeading";
import CommitteeData from "./commitee-data";
import InternationalCommittee from "./InternationalCommitee";
import AdvisoryCommittee from "./AdvisoryCommittee";
import ProgramCommittee from "./ProgramCommittee";

function Committee() {
  return (
    <div
      className="submissions section__padding"
      style={{ color: "white" }}
      id="members"
    >
      <div className="heading">
        <h1 className="gradient__text">Committee Members</h1>
        <p>
          1st International Conference on Communication and Computational
          Techniques (ICCCT-2022)
        </p>
      </div>

      <div className="committee-container" >
        {CommitteeData.map((data) => (
          <div className="committee-section">
            <CommitteeHeading headingText={data.heading} />
            <div className="committee-members-card">
              <ul style={{letterSpacing:" 1px"}}><b>
                {data.namelist.map((names) => (
                  <li>{names}</li>
                ))}
                </b>
              </ul>
            </div>
          </div>
        ))}
        <div className="committee-section">
          <CommitteeHeading headingText="Advisory Committee" />
          <AdvisoryCommittee/>
        </div>
        <div className="committee-section">
          <CommitteeHeading headingText="Program Committee" />
          <ProgramCommittee />
        </div>
        <div className="committee-section">
          <CommitteeHeading headingText="International Advisory Committee" />
          <InternationalCommittee />
        </div>
        <div className="committee-section">
          <CommitteeHeading headingText="For Queries contact" />
          <div className="committee-members-card">
            <ul>
              <li>
                <p>

                Dr. Sanjit Kumar Dash , Dept. of IT , OUTR
                </p>
                <p>Ph. No:-91-9437990892</p>
                <p id='sponsor'>Mail-id:- skdash@outr.ac.in</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committee;
