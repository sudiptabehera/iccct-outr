import React, { useState } from "react";
import Queries from "./Queries";

import "./committee.css";
import CommitteeHeading from "./CommitteeHeading";
import CommitteeData from "./commitee-data";
import InternationalCommittee from "./InternationalCommitee";

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

      <div className="committee-container">
        {CommitteeData.map((data) => (
          <div className="committee-section">
            <CommitteeHeading headingText={data.heading} />
            <div className="committee-members-card">
              <ul>
                {data.namelist.map((names) => (
                  <li>{names}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="committee-section">
          <CommitteeHeading headingText="International Committee" />
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
                <p>Mail-id:-</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committee;
