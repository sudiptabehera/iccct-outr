import React from "react";
import Feature from "../../components/feature/Feature";
// import './whatGPT3.css';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="submission">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Call For Papers</h1>
      </div>
     
      <div className="gpt3__whatgpt3-container2">
        <div className="gpt3__whatgpt3-container">
        <h3>The submitted manuscripts must follow the following Manuscript format Adhere to page size (A4 : 
8.27″ x 11.69″), page margin size (top:0.7″, bottom:0.7″, left/inside: 0.67″, right/outside: 0.56″), line spacing 
(‘single’), and font style (‘Times New Roman’), font sizes (Abstract and Reference: 12pt, Text body: 10pt), 
Subsection: should be consecutively numbered, Table and figure caption: 09pt – no bold – no italic, Figures 
should be in the proper size, less than 16 cm in width and 24 cm in height without background, for color
figures the quality with the resolution of at least 300dpi, and should be submitted through the EasyChair
(above mentioned link) as Microsoft Word. The manuscripts should be no longer than 14 pages and not less 
than 600 words. Submitted papers should not be previously published in or be under consideration for 
publication in another conference or journal. Paper titles and/or author names cannot be changed and/or added 
to the papers once papers are submitted. The Program Committee reserves the right to not review papers that 
either exceed the length specification or have been submitted or published elsewhere. Submissions must 
include a title, abstract, keywords, author(s) and affiliation(s) with postal and e-mail addresses. 
</h3>
        </div>
        <br />
        <div className="gpt3__whatgpt3-container2">
        <div className="gpt3__whatgpt3-container">
          <Feature title="Submission of Paper for Doctoral Symposium: " text="There is Doctoral symposium that allows the Masters and 
PhD students to submit their papers for consideration of best paper award. We are providing two awards of 
Rs. 10,000/- each for those students. For such papers the students should follow the Doctoral symposium 
format" />
          <Feature title="Review and Publication of Manuscripts:" text="The originality, technical correctness, relevance, and quality of presentation of the submitted papers will be 
evaluated by the TPC members. An accepted paper must be presented at the conference venue by a registered 
author at the full registration rate. Each full registration covers up to two conference papers authored by the 
registered author. Accepted and presented papers will be published in the conference Procedia (Applied For)" />

        </div>
      </div>
      </div>
    </div>
  );
}
export default WhatGPT3;
