import React from 'react';
import '../Components/CSS/Footer.css';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

const Footer = () => {

  const copyrightDate = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer-cont'>
        <h3>Phone</h3>
        <a href="tel:+2349136860915">+234 913 686 0915</a>
      </div>
      <div className='footer-cont'>
        <h3>Email</h3>
        <a href="mailto:fatomoyeemmanuel1@gmail.com">fatomoyeemmanuel1@gmail.com</a>
      </div>
      <div className='footer-cont'>
        <h3>Follow Me</h3>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="linkedin-logo" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="twitter-logo" />
        </a>
      </div>
      <div className='footer-cont'>
        <p>&copy; {copyrightDate} By Emmanuel Fatomoye</p>
      </div>
      
    </div>
  )
}

export default Footer
