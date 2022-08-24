import React from "react";
import "./internationalcommittee.css";
function InternationalCommittee() {
  return (
    <div>
      <section className="table">
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>Sl.No</th>
                <th style={{ width: "20%" }}>NAME</th>
                <th style={{ width: "25%" }}>UNIVERSITY /COLLEGE)</th>
                <th style={{ textAlign: "center", width: "15%" }}>DEPT</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content" style={{ height: "31rem" }}>
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>1</td>
                <td style={{ width: "20%" }}>Prof. P. V. Sudha</td>
                <td style={{ width: "25%" }}>Osmania University</td>
                <td style={{ textAlign: "center", width: "15%" }}>CSE</td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>2</td>
                <td style={{ width: "20%" }}>Prof. Joy Iong Zong Chen</td>
                <td style={{ width: "25%" }}>Da- Yeh University, Taiwan</td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>3</td>
                <td style={{ width: "20%" }}>Prof. A K Verma</td>
                <td style={{ width: "25%" }}>
                  Western Norway University, Norway
                </td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>4</td>
                <td style={{ width: "20%" }}>Prof. Dan Simon</td>
                <td style={{ width: "25%" }}>
                  Cleveland State University, USA
                </td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>5</td>
                <td style={{ width: "20%" }}>Prof. Atulya K. Nagar</td>
                <td style={{ width: "25%" }}>Liverpool Hope University, UK</td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>6</td>
                <td style={{ width: "20%" }}>Dr. Wang Haoxiang</td>
                <td style={{ width: "25%" }}>Cornell University, USA</td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
              <tr>
                <td style={{ width: "9%", textAlign: "left" }}>7</td>
                <td style={{ width: "20%" }}>Dr. Anuradha Ranasinghe</td>
                <td style={{ width: "25%" }}>Liverpool Hope University, UK</td>
                <td style={{ textAlign: "center", width: "15%" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default InternationalCommittee;
