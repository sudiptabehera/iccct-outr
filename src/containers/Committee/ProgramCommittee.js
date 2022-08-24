import React from "react";

const programCommitteeData = [
  {
    name: "Prof. Poonam Singh",
    university: "NIT",
    place: "Rourkela",
  },
  {
    name: "Prof. Saraju P. Mohanty",
    university: "UNT",
    place: "Denton",
  },
  {
    name: "Prof. Sriram Chellappan",
    university: "USF",
    place: "Florida",
  },
  {
    name: "Prof. Sarojananda Mishra",
    university: "IGIT",
    place: "Sarang",
  },
  {
    name: "Prof. M S Bhatt",
    university: "NIT",
    place: "Surtkal",
  },
  {
    name: "Dr. Albert Sunny",
    university: "IIT",
    place: "Palakkad",
  },
  {
    name: "Dr. Niladri Bihari Puhan",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Manoranjan Satpathy",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Barathram. Ramkumar",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Soumya Prakash Dash",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Prof. Debasish Jena",
    university: "IIIT",
    place: "Bhubaneswar",
  },
];

function ProgramCommittee() {
  return (
    <div>
      <section className="table">
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Sl.No</th>
                <th style={{ width: "25%" }}>NAME</th>
                <th style={{ width: "20%" }}>UNIVERSITY /COLLEGE</th>
                <th style={{ width: "15%" }}>PLACE</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {programCommitteeData.map((item, index) => (
                <tr key={index + 1}>
                  <td style={{ width: "10%" }}>
                    {index + 1}
                  </td>
                  <td style={{ width: "25%" }}>{item.name}</td>
                  <td style={{ width: "20%" }}>{item.university}</td>
                  <td style={{ width: "15%" }}>{item.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ProgramCommittee;
