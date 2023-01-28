import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>DAAW</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/duwianjarariw/"><FaFacebookF /></a>
        <a href="https://instagram.com/duwiaaw/"><FiInstagram /></a>
        <a href="https://twitter.com/duwi_Anjar_Ariw?t=uHTfOUzQhzLA4pWDuK0UpQ&s=09"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DAAW. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer