import React from "react";

function FlipCard({front, back}) {
  return (
    <div class="card">
      <div class="content">
        <div class="front">
            <img src={front} alt="" />
        </div>
        <div class="back">{back}</div>
      </div>
    </div>
  );
}

export default FlipCard;
