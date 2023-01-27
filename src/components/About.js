import React, { useEffect } from 'react';
import './About.scss';
import Mypic from '../pics/3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div data-aos="zoom-in">About Me</div>
        <br />
        <p data-aos="zoom-in" data-aos-delay="400">
          My name is Rawitch Payakkawan. You can call me Mix. I am studying at
          Kasetsart University, Faculty of Engineering, Major in Computer
          engineering. I have been learning a lot of subjects such as problem
          solving, algorithms, data structure, database, software engineer etc.
        </p>
      </div>
      <div className="mypic">
        <img src={Mypic} alt="MyPic" data-aos="zoom-out" data-aos-duration="1000"/>
      </div>
    </div>
  );
}

export default About;
