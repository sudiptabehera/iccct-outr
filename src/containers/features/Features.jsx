import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '15th September 2022',
    text: 'Submission of Extended Abstract',
  },
  {
    title: '15th October 2022 ',
    text: 'Notification of Acceptance',
  },
  {
    title: '15th November 2022',
    text: 'Submission Deadline for Revised Papers (if required)',
  },
  {
    title: '30th November 2022',
    text: 'Registration Deadline',
  },
  {
    title: '16-17 December, 2022',
    text: 'Conference Dates',
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="schedules">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Important Dates</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
