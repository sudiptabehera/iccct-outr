import React from 'react';
import gpt3Logo from '../../assets/ICCT.png';
import './footer.css';
import Article from '../../components/article/Article';
// import { blog01, blog02, blog03 } from '../speaker/imports';

function Footer() {
  return (
    <div className="gpt3__footer section__padding" id="contact">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Contact Us </h1>
      </div>
      
        {/* <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div> */}
        <div className="gpt3__possibility-content">
          {/* <h4>Request Early Access to Get Started</h4> */}
          <h1 className="gradient__text" >Odisha University of Technology and Research (OUTR) </h1>
          <h4>(Formerly College of Engineering and Technology)</h4>
          <p><ul>
        <li>Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR</li>
        <br></br>Ph. No:-91-9437990892
        <br></br>Mail-id:-
        <li>Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR</li>
        <br></br>Ph. No:-91-9437990892
        <br></br>Mail-id:-
        <li>Dr. Sanjeet Kumar Dash , Dept. of IT , OUTR</li>
        <br></br>Ph. No:-91-9437990892
        <br></br>Mail-id:-
      </ul></p>
          
          {/* <h4>Request Early Access to Get Started</h4> */}
        
      </div>
      
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Department of CSA, OUTR <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Department of CSA, OUTR <br /> All Rights Reserved</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Department of CSA, OUTR <br /> All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
