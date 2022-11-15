import React from 'react'
import Footer from '../../components/Footer/Footer';
import LightHeader from '../../components/LighHeader/LightHeader';
import './Contact.css';
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  useEffect(() => {

    window.scroll(0,300);
  }, [])
 

  const form=useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_961sa57', 'template_hams89v', form.current, '9bUL6Fn-cC39aB-A0')
      .then((result) => {
          alert("Message Sent Successfully !")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  document.title="Contact | 9mediaOnline";

  return (
    <div>
      <LightHeader text1="Ready to enter the new era of TV advertising?" text2="" subtext1="" buttonText="" text0="GET IN TOUCH," />
      <div className='form-container-contact-parent'>
        <div className='contact-body-img'>
          <img src='images/contactBgBody.png'></img>
        </div>
      <div className='contact-container'>
        <div className='contat-form-container'>
          <div className='form-contact-child'>
            <form ref={form} onSubmit={sendEmail}>
          <h4>Get a Demo</h4>
          <p>Name</p>
          <input type="text" name="name" id="name" required></input>
          <p>Work Email</p>
          <input type="email" name="email" id="email"  required></input>
          <p>Phone Number</p>
          <input type="number" name="phone" id="phone"  required></input>
          <p>Company</p>
          <input type="text" name='companyName' id='companyName' required></input>
          {/* <p>Company Type</p>
          <input type="text" name='companyType' id='companyType' required></input>
          <p>Role</p>
          <input type="text" name='Role' id='type' required></input>
          <p>Country</p>
          <input type="text" name='country' id='country' required></input> */}
          <p>Message</p>
          <input type="text" name='hearAboutUs' id='hearAboutUs' required></input>
          <p>Want to stay in touch with us?</p>
          <select name="stayConnect" id="stayConnect">
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          <br></br>
          <button style={{cursor:"pointer"}} type='submit' className='contact-submit-form'>Submit</button>
          <h6>To learn how 9Media Online handles your information, please see our <a href='#'>privacy policy</a>.</h6>
          </form>
        </div>
        </div>
        </div> 
      </div>
      <Footer />
    </div>
  )
}

export default Contact