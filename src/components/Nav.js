import React, { useRef } from 'react';
import './Nav.scss';

function Nav(props) {
  const { click_exp, click_contact, click_pj } = props;
  function myFunction(x) {
    x.classList.toggle('change');
  }
  return (
    <div className="nav">
      <div className="container" onClick={myFunction}>
        <div className="logo">RawitchP</div>
        <div className="menu-list">
          <div className="menu" onClick={click_exp}>
            Experience
          </div>
          <div className="menu" onClick={click_pj}>
            Project
          </div>
          <div className="menu contact-btn" onClick={click_contact}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
