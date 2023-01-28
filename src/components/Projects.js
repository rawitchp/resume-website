import React from 'react';
import './Projects.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="pj1">
          <p data-aos="fade-out">MY PROJECTS</p>
          <div className="dl-resume" data-aos="fade-in">
            You can download my resume here!
            <a href="Resume.pdf" download="Resume.pdf">
              <button>Download</button>
            </a>
          </div>
          <div data-aos="slide-up" data-aos-delay="500">
            <Card style={{ width: '15rem' }} className='card'>
              {/* <Card.Img variant="top" src={P1} /> */}
              <Card.Body>
                <Card.Title>Mrw Store</Card.Title>
                <Card.Text style={{ color: 'black', fontSize: '20px' }}>
                  Mrw Store is an e-commerce website that use Redux concept and
                  use PayPal payment.
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ fontSize: '20px' }}
                  href="https://github.com/rawitchp/mern-mrw-store"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to GitHub
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="slide-up" data-aos-delay="500">
            <Card style={{ width: '15rem' }} className='card'>
              {/* <Card.Img variant="top" src={P1} /> */}
              <Card.Body>
                <Card.Title>KUlony</Card.Title>
                <Card.Text style={{ color: 'black', fontSize: '20px' }}>
                  KUlony is a social media website for KU students to interact
                  with each other.
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ fontSize: '20px' }}
                  href="https://github.com/rawitchp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to GitHub
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div></div>
        </div>
        <div className="pj2">
          <div data-aos="slide-up" data-aos-delay="500">
            <Card style={{ width: '15rem' }} className='card'>
              {/* <Card.Img variant="top" src={P1} /> */}
              <Card.Body>
                <Card.Title>YAYA FEVER</Card.Title>
                <Card.Text style={{ color: 'black', fontSize: '20px' }}>
                  YAYA FEVER project is a tree-managing website. It can water
                  the plants automatically, check humidity, check height and
                  sell plants.
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ fontSize: '20px' }}
                  href="https://github.com/YAYA-FEVER"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to GitHub
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="slide-up" data-aos-delay="500">
            <Card style={{ width: '15rem' }} className='card'>
              {/* <Card.Img variant="top" src={P1} /> */}
              <Card.Body>
                <Card.Title>Tracker App</Card.Title>
                <Card.Text style={{ color: 'black', fontSize: '20px' }}>
                  Tracker App is a basic website for track something to
                  delivery.
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ fontSize: '20px' }}
                  href="https://github.com/rawitchp/mern-tracker-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to GitHub
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
