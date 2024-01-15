import React from 'react';
import myImage from '../assets/myImage.jpg';
import { Link } from 'react-router-dom';
import '../Components/CSS/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-cont1 desktop'>
        <img src={myImage} alt="an image of myself" />
      </div>
      <div className='home-cont2'>
        <div className='home-inner'>
          <div className='home-heading'>
            <h1>Hello</h1>
          </div>
          <div className='home-details'>
              <h3>A Bit About Me</h3>
              <p>I am a front-end web developer, skilled in HTML, CSS, JavaScript and React JS. 
                I specialize in crafting visually appealing and user-friendly websites. 
                With a keen eye for design and a passion for coding, 
                I create digital experiences that seamlessly merge form and function.
              </p>
          </div>
          <div className='home-buttons'>
            <Link to="/resume">
              <div className='resume-btn btn'>
                <h3>Resume</h3> 
              </div>
            </Link>
          
            <Link to="/projects">
              <div className='projects-btn btn'>
               <h3>Projects</h3> 
              </div>
            </Link>
            
            <Link to="/contact">
              <div className='contact-btn btn'>
                <h3>Contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='home-cont1 mobile'>
        <img src={myImage} alt="an image of myself" />
      </div>
    </div>
  )
}

export default Home
