import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import './Homepage.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Profile from '../pics/profile.jpg';
import About from '../components/About';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import Skills from '../components/Skills';

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="page">
      <Nav />
      <div className="homepage">
        <div className="photo" data-aos="slide-right">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="intro">
          <div className="intro-text" data-aos="slide-left">
            {' '}
            I'm Rawitch Payakkawan. A Computer Engineer
            <br />
            <span>based in Thailand.</span>
            <br />
            <br />
          </div>
          <div
            className="passionate"
            data-aos="slide-left"
            data-aos-delay="60"
            data-aos-duration="2800"
          >
            I’m probably the most passionate Frontend developer you will ever
            get to work with. If you have a great project that needs some
            amazing skills, I’m your guy.
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
