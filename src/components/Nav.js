import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">RawitchP</div>
        <div className="menu-list">
          <div className="menu">Experience</div>
          <div className="menu">Project</div>
          <div className="menu contact-btn">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
