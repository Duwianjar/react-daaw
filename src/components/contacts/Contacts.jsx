import React from 'react'
import './contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiInstagram} from 'react-icons/si'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contacts = () => {
  function TextEmail() {
    const form = useRef(null);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7nd4od1', 'template_e3ola9k', form.current, '7IpC0_YsMRqZNuHzX')
      e.target.reset()
    };
    return (
      <>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </>
    );
  }

   
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>duwianjarariwibowo@gmail.com</h5>
            <a href="mailto:duwianjarariwibowo@gmail.com" target="_blank" without rel='noreferrer' >Send a message</a>
          </article>
          <article className='contact__option'>
            <SiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Duwiaaw</h5>
            <a href="https://www.instagram.com/duwiaaw/" target="_blank" without rel='noreferrer' >Send a message</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6285157993801</h5>
            <a href="https://api.whatsapp.com/qr/UQGA2UZVEVUQJ1" target="_blank" without rel='noreferrer' >Send a message</a>
          </article>
        </div>
        {/* END  OF CONTACT OPTIONS */}
        <TextEmail />

    </div>
        
      
        
    </section>
  )
}

export default contacts