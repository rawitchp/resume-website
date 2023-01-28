import React from 'react';
import './Activities.scss';

function Activities() {
  return (
    <div className="activities">
      <div className="container">
        Activities
        <div data-aos="slide-right">
          <h4>Real–world programming KULearn</h4>
          <h5>Teaching Assistant</h5>
          Assisted professors in teaching and helping the students to understand
          the basis of Flask in website creation and basic troubleshooting for
          Visual studio code.
        </div>
        <br />
        <div data-aos="slide-right">
          <h4>Seed:Zero Camp</h4>
          <h5>Frontend Teaching Assistant</h5>
          Assisted juniors in teaching the basics of HTML and CSS.
        </div>
      </div>
    </div>
  );
}

export default Activities;
