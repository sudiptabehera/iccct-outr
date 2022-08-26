import React, { useState } from "react";

import "./contactus.css";

function ContactUs() {
  return (
    <div
      className="submissions section__padding"
      style={{ color: "white" }}
      id="contact"
    >
      <div className="heading">
        <h1 className="gradient__text">Contact Us</h1>
        <p>
          <h2 className="gradient__text">
            Odisha University of Technology and Research (OUTR)
          </h2>
          <h4 style={{ textAlign: "center" }}>
            (Formerly College of Engineering and Technology)
          </h4>
          <br></br>
          <p>
            <ul style={{ display: "flex", flexDirection: "row" }}>
              <br></br>
              <li>
                Dr. Sanjit Kumar Dash , Dept. of IT , OUTR
                <br></br>
                Ph. No:- 91- 9437990892
                <br></br>Mail-id:- skdash@outr.ac.in
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li>
                Ms. Ananya Dastidar , Dept. of I&E , OUTR
                <br></br>
                Ph. No:- 91- 9861230224
                <br></br>Mail-id:- adastidar@outr.ac.in
              </li>
            </ul>
          </p>
        </p>
      </div>

      <div className="submissions-container"></div>
    </div>
  );
}

export default ContactUs;
