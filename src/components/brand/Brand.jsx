import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import FlipCard from './FlipCard';

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      
      <div>
        <FlipCard front={google} back="lorem text lorem lorem ipsum helleore  lh aslh a  ahal"/>
        <FlipCard front={slack} back="lorem text lorem lorem ipsum helleore  lh aslh a  ahal"/>
        <FlipCard front={atlassian} back="lorem text lorem lorem ipsum helleore  lh aslh a  ahal"/>
        <FlipCard front={dropbox} back="lorem text lorem lorem ipsum helleore  lh aslh a  ahal"/>
        <FlipCard front={shopify} back="lorem text lorem lorem ipsum helleore  lh aslh a  ahal"/>
      </div>
    </div>
  );
}
export default Brand;
