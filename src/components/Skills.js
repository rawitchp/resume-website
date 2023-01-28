import React from 'react';
import './Skills.scss';

function Skills() {
  return (
    <div className="skills">
      <div className="container">Skills</div>
      <br />
      <div className="skill-content">
        <div data-aos="zoom-in">
          <h6>Programming Languages</h6>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div data-aos="zoom-in">
          <h6>Web Technologies</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>ExpressJS</li>
          </ul>
        </div>
        <div data-aos="zoom-in">
          <h6>Database</h6>
          <ul>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
