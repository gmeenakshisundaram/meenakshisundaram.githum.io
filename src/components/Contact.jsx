import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        <div className="contact-grid">
          <div className="glass-card contact-card reveal">
            <Mail className="contact-icon" />
            <h3>Email</h3>
            <p>g.sundaramganapathi@gmail.com</p>
            <p>meenakshi.sundaram2@ibm.com</p>
          </div>
          <div className="glass-card contact-card reveal">
            <Phone className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 9986689745</p>
          </div>
          <div className="glass-card contact-card reveal">
            <Linkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/g-meenakshi-sundaram-490977229" target="_blank" rel="noreferrer" className="contact-link">View Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
