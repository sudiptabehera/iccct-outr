import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03 } from './imports';
import './speaker.css';

function Speaker() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
    <h3 className="gradient__text">Who is Speaking?</h3>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupC">
          <Article imgUrl={{}} date="Speaker-info" text="Speaker1" />
          <Article imgUrl={{}} date="Speaker-info" text="Speaker2" />
          <Article imgUrl={{}} date="Speaker-info" text="Speaker3" />
        </div>
      </div>
    </div>
  );
}
export default Speaker;

