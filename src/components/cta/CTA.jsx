import React from 'react';
import './cta.css';

function CTA() {
  return (
    <div className="gpt3__cta"  >
      <div className="gpt3__cta-content" >
        {/* <p>Click the button to Submit Papers</p> */}
        <h3>Click the button to Submit Papers</h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href="https://easychair.org/my/conference?conf=icmib2021">
          <button type="button">Submit Now</button>
        </a>
      </div>
    </div>
  );
}
export default CTA;
