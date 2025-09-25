import React from 'react';
import './Contact.css';
import fbIcon from '../assets/fb.png';
import tgIcon from '../assets/tg.png';
import emailIcon from '../assets/email.png';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-section-container">
      <h2 className="section-heading contact-heading">Contact Me</h2>
      
      <div className="form-wrapper">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={6}></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="social-links">
        <a href="https://www.facebook.com/john.mark.dela.cruz.121637" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://markdelacruz" target="_blank" rel="noopener noreferrer">
          <img src={tgIcon} alt="Telegram" className="social-icon" />
        </a>
        <a href="mailto:johnmark12345@gmail.com">
          <img src={emailIcon} alt="Email" className="social-icon" />
        </a>
      </div>
      
       </div>
  );
};

export default Contact;