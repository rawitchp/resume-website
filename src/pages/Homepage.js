import React, { useEffect, useRef } from 'react';
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
  const exp = useRef(null);
  const pj = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const click_exp = () => {
    exp.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const click_pj = () => {
    pj.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const click_contact = () => {
    contact.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const click_home = () => {
    home.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const click_about = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="page">
      <Nav
        click_exp={click_exp}
        click_pj={click_pj}
        click_contact={click_contact}
      />
      <div className="homepage" ref={home}>
        <div className="photo" data-aos="fade-left">
          <img src={Profile} alt="Profile" className='profile'/>
        </div>
        <div className="intro">
          <div className="intro-text" data-aos="fade-left">
            {' '}
            I'm Rawitch Payakkawan. A Computer Engineer
            <br />
            <span>based in Thailand.</span>
            <br />
            <br />
          </div>
          <div
            className="passionate"
            data-aos="fade-left"
            data-aos-delay="60"
            data-aos-duration="2800"
          >
            I’m probably the most passionate Frontend developer you will ever
            get to work with. If you have a great project that needs some
            amazing skills, I’m your guy.
          </div>
        </div>
      </div>
      <div ref={about} className="comp">
        <About />
      </div>
      <div className="comp">
        <Skills />
      </div>
      <div ref={pj} className="comp">
        <Projects />
      </div>
      <div ref={exp} className="comp">
        <Activities />
      </div>
      <div ref={contact} className="comp">
        <Contact />
      </div>
      <div className="comp">
        <Footer
          click_pj={click_pj}
          click_contact={click_contact}
          click_home={click_home}
          click_about={click_about}
        />
      </div>
    </div>
  );
}

export default Homepage;
