import React, { useEffect, useRef, useState } from 'react';
import '../Components/CSS/Footer.css';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

const Footer = () => {

  const copyrightDate = new Date().getFullYear();

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`footer ${isVisible ? 'visible' : ''}`} ref={elementRef}>
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
