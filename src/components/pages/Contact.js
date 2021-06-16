import React from 'react';
import Footer from '../Footer';
import '../../styles/Contact.css'

export default function Contact() {

  return (
    <div className="contact d-flex flex-column justify-content-center">
      
      <h2>Send me an email!</h2>
      <a href="mailto:phil.garip@gmail.com" type="button" className="btn btn-outline-dark">Email</a>
      <Footer />
    </div>
  );
}