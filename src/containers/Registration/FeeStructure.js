import React from 'react';
import "./feestructure.css";
function StepA() {
  return (
    <div>
      <section>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th className="f_col">Participant Category</th>
          <th>National</th>
          <th>Overseas (USD)</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td className="f_col">Industrial Delegates</td>
          <td>8,000 INR</td>
          <td>225 USD</td>
          
        </tr>
        <tr>
          <td className="f_col">Academic Delegates</td>
          <td>7,000 INR</td>
          <td>200 USD</td>
         
        </tr>
        <tr>
          <td className="f_col">Students (U.G., P.G., Ph.D., Research Scholars)</td>
          <td>6,000 INR</td>
          <td>175 USD</td>
          
        </tr>
       
        
      </tbody>
    </table>
  </div>
</section>




    </div>
  );
}

export default StepA;
