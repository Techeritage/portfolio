import React from 'react';
import '../Components/CSS/Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <div className='resume-heading'>
        <h1>
          Resume
        </h1>
      </div>
      <div className='resume-cont'>
        <div className='resume-cont1'>
          <h2>
            Work Experience
          </h2>
        </div>
        <div className='resume-cont2'>
          <div className='resume-details-cont'>
            <div className='resume-date'>
              <p>2023-2023</p>
            </div>
            <div className='resume-details'>
              <p className='workplace'>Bincom Dev Center</p>
              <h3>Web Developer-Intern</h3>
              <p>As an intern web developer at Bincom Dev Center, I actively contributed to web development projects, honing skills in HTML, CSS, 
                and JavaScript. Collaborated with experienced developers, participated in coding tasks,
                and gained valuable insights into the software development life cycle, fostering growth and hands-on learning.
              </p>
            </div>
          </div>
          <div className='resume-details-cont'>
            <div className='resume-date'>
              <p>2024-2024</p>
            </div>
            <div className='resume-details'>
              <p className='workplace'>Cowrywise</p>
              <h3>Web Developer (Cowrywise ambassador)</h3>
              <p>
              As a Cowrywise Ambassador Web Developer, I contributed to building and enhancing web features, ensuring a seamless user experience. 
              Collaborated with the team to implement design changes, 
              troubleshoot issues, and played a vital role in promoting financial literacy through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='resume-cont'>
        <div className='resume-cont1'>
          <h2>
            Education
          </h2>
        </div>
        <div className='resume-cont2'>
          <div className='resume-details-cont'>
            <div className='resume-date'>
              <p>2022-Present</p>
            </div>
            <div className='resume-details'>
              <p className='workplace'>Yaba College of Technology</p>
              <h3>ND in Computer Science</h3>
              <p>
                Currently pursuing a Computer Science Diploma at Yaba College of Technology. 
                Passionate about learning and applying technology to solve real-world challenges, aiming for academic excellence and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='resume-cont cont'>
        <div className='resume-cont1'>
          <h2>
            Skills & Expertise
          </h2>
        </div>
        <div className='resume-cont2'>
          <div className='resume-details-cont'>
            <div className='resume-date'></div>
            <div className='resume-details'>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Version Control/Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
