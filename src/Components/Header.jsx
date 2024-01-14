import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components/CSS/Header.css';

const Header = () => {

  const location = useLocation();

  return (
    <div className='Header'>
      <div className='Header-cont1'>
        <div className='color-ball'></div>
        <div className='head-link'>
          <Link to="/portfolio">
            <h2>Emmanuel Fatomoye</h2>
          </Link>
          <p>Front-end Web Developer</p>
        </div>
        
      </div>
      <div className='Header-cont2'>
        <ul>
          <li className={location.pathname === '/portfolio/resume' ? 'active' : ''}>
            <Link to="/portfolio/resume">
              Resume
            </Link>
          </li>
          <li className={location.pathname === '/portfolio/projects' ? 'active' : ''}>
            <Link to="/portfolio/projects">
              Projects
            </Link>
          </li>
          <li className={location.pathname === '/portfolio/contact' ? 'active' : ''}>
            <Link to="/portfolio/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='mobile-menu'>
        &#9776;
      </div>
    </div>
  )
}

export default Header
