import React from 'react';
import "./feestructure.css";
function StepA() {
  return (
    <div>
      <section>
  <div class="tbl-header1">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th className="f_col1">Participant Category</th>
          <th  className='f_col2'>National</th>
          <th className='f_col2'>Overseas (USD)</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content1">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td className="f_col1">Industrial Delegates</td>
          <td className='f_col2'>6,000 INR</td>
          <td className='f_col2'>80 USD</td>
          
        </tr>
        <tr>
          <td className="f_col1">Academic Delegates</td>
          <td className='f_col2'>5,000 INR</td>
          <td className='f_col2'>65 USD</td>
         
        </tr>
        <tr>
          <td className="f_col1">Students (U.G., P.G., Ph.D., Research Scholars)</td>
          <td className='f_col2'>4,000 INR</td>
          <td className='f_col2'>55 USD</td>
          
        </tr>
       
        
      </tbody>
    </table>
  </div>
</section>




    </div>
  );
}

export default StepA;
