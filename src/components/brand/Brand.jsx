import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import FlipCard from './FlipCard';

function Brand() {
  return (
    <div >
    <div className="gpt3__possibility section__padding1" style={{padding:"0rem 6rem"}} >
    <div className="gpt3__possibility-content">
      
        <h1 className="gradient__text">Sponsors</h1>
        </div>
    </div>
    <div className="gpt3__brand section__padding">
      
      <div>
        <FlipCard front={""} back="To be intimated"/>
        <FlipCard front={""} back="To be intimated"/>
        <FlipCard front={""} back="To be intimated"/>
        <FlipCard front={""} back="To be intimated"/>
        <FlipCard front={""} back="To be intimated"/>
      </div>
      
    </div>
    </div>
  );
}
export default Brand;
