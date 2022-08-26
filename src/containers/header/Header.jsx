import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="about">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">About the Conference</h1>
        <p>
          <b>
            1st International Conference on Communication and Computational
            Techniques (ICCCT-2022)
          </b>
          <br />
          <br />
          ICCCT aims to bring together leading academic 
scientists, researchers and research scholars to 
exchange and share their experiences and research 
results on all aspects of Communication and 
Computational Techniques.
It also provides a premier interdisciplinary platform 
for researchers, practitioners and educators to 
present and discuss the most recent innovations, 
trends, and concerns as well as practical challenges 
encountered and solutions adopted in the fields of 
Computational Techniques and Communication

        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
}
export default Header;
