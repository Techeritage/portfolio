import React from 'react';
import '../Components/CSS/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-cont1'>
        <div>
          <div className='contact-heading'>
            <h1>Contact</h1>
          </div>
          <p className='cont-p'>Looking forward to hearing from you</p>
          <div className='contact-info'>
            <h3>Phone</h3>
            <p><a href="tel:+2349136860915">+234 913 686 0915</a></p>
          </div>
          <div className='contact-info'>
            <h3>Email</h3>
            <p><a href="emailto:fatomoyeemmanuel1@gmail.com">fatomoyeemmanuel1@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className='contact-cont2'>
        <div className='contact-grid'>
          <div className='contact-grid-info'>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div className='contact-grid-info'>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
          </div>
          <div className='contact-grid-info'>
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className='contact-grid-info'>
            <label htmlFor="sub">Subject</label>
            <input type="text" name="sub" id="sub" />
          </div>
        </div>
        <div className='subut'>
          <div className='subut-sub'>
            <label htmlFor="sub">Subject</label>
            <textarea name="sub" id="sub" cols="30" rows="10"></textarea>
          </div>
          <div className='subut-but'>
            <h3>Submit</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
