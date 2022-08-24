import React from "react";

const advisoryCommitteeData = [
  {
    name: "Prof. S. Behera",
    department: "Electrical and Instrumentation Engineer",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof. A.Barisal",
    department: "Electrical Engineering",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof. D. P. Satpathy",
    department: "Civil Engineering",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof. R. Mallick",
    department: "Mechanical Engineering",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof.R.K.Pradhan",
    department: "Biotechnology",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof.A.K.Dash",
    department: "Fashion Technology",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof. B.P.Dash",
    department: "Textile Engineering",
    position: "HOD",
    university: "OUTR",
  },
  {
    name: "Prof. N.Acharya",
    department: "Chemistry",
    position: "HOD",
    university: "OUTR",
  },
];

function AdvisoryCommittee() {
  return (
    <div>
      <section className="table">
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>Sl.No</th>
                <th style={{ width: "20%" }}>NAME</th>
                <th style={{ width: "25%" }}>Department</th>
                {/* <th style={{ width: "15%" }}>Position</th>
                <th style={{ width: "15%" }}>University</th> */}
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content" >
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {advisoryCommitteeData.map((item, index) => (
                <tr key={index+1}>
                  <td style={{ width: "10%", textAlign: "left" }}>{index+1}</td>
                  <td style={{ width: "20%" }}>{item.name}</td>
                  <td style={{ width: "25%" }}>{item.department}</td>
                  {/* <td style={{ width: "15%" }}>{item.position}</td>
                  <td style={{ width: "15%" }}>{item.university}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdvisoryCommittee;
