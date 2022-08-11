import React from "react";
import Article from "../../components/article/Article";
import "./speaker.css";
import {blog01,blog02} from "./imports"

function Speaker() {
  return (
    <div className="gpt3__blog section__padding" id="speaker">
      <div className="gpt3__blog-heading">
        <h3 className="gradient__text">Who is Speaking?</h3>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog01} date="New Jersey, USA" text=" Sarang Mahatwo" />
          <Article imgUrl={blog02} date="Aurel Vlaicu University of Arad, Romania" text="Prof. Valentina E Balas" />
          
        </div>
      </div>
    </div>
  );
}
export default Speaker;
