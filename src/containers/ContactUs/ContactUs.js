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
          <br />
            <ul>
              <li>
                <p>
                  Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR
                  <p>Phone No.: +91-9437990892</p>
                </p>
                <p>Mail-id:-</p>
              </li>
              <li>
                <p>
                  Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR
                  <p>Phone No.: +91-9437990892</p>
                </p>
                <p>Mail-id:-</p>
              </li>
              <li>
                <p>
                  Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR
                  <p>Phone No.: +91-9437990892</p>
                </p>
                <p>Mail-id:-</p>
              </li>
            </ul>
          </p>
      </div>

      <div className="submissions-container"></div>
    </div>
  );
}

export default ContactUs;
