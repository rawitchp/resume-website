import React from 'react';
import './Footer.scss';
import Fb from '../pics/fb-logo.png';
import Ig from '../pics/ig-logo.png';
import LinkedIn from '../pics/linkedin-logo.png';
import Gh from '../pics/gh-logo.png';

function Footer(props) {
  const { click_home, click_about, click_pj, click_contact } = props;
  return (
    <div className="footer">
      <div className="container">
        <div>
          <div className="logo">RawitchP</div>
          <a
            href="https://www.facebook.com/rawitch.payakkawan/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Fb} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/_mix.rw_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Ig} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/rawitch-payakkawan/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/rawitchp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Gh} alt="GitHub" />
          </a>
          <div className="copyright">
            Copyright 2023 • Rawitch Payakkawan.
            <div className="created">Created by Rawitch Payakkawan</div>
          </div>
        </div>
        <div className="footer-menu">
          <div onClick={click_home}>Home</div>
          <div onClick={click_about}>About Me</div>
          <div onClick={click_pj}>Project</div>
          <div onClick={click_contact}>Contact Me</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
