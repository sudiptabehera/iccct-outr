import React from 'react'
import "./committee.css"
function CommitteeHeading({headingText}) {
  return (
    <div className='committee-heading'>
        <h2>{headingText}</h2>
    </div>
  )
}

export default CommitteeHeading