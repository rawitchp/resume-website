import React, { useEffect, useRef } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import Aos from 'aos';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    // console.log('here');
    emailjs
      .sendForm(
        'service_8upt7te',
        'template_dj2jalh',
        form.current,
        '9FaHPjUs1Np4UTPT1'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
    e.nativeEvent.stopImmediatePropagation();
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-text" data-aos="fade-out">
          Let’s talk to me!
          <br />
          <div>
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-in"
          data-aos-delay="500"
          className="contact-form"
        >
          {/* <div className="email">Email Me</div> */}
          <div>Name</div>
          <input type="text" name="name" required />
          <div>Email Address</div>
          <input type="email" name="email" required />
          <div>Message</div>
          <textarea name="message" required />
          <input type="submit" value="LET'S GET START" className="send-btn" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
