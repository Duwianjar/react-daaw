import React from 'react'
import './about.css'
import ME from '../../assets/abouts.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About_Image" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>while One Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>9+ Complete</small>
            </article>
          </div>

          <p>
          I am an informatics student at AHMAD DAHLAN UNIVERSITY entering in 2021, and before becoming a student I used to work as a machine operator at PT IKPP owned by APP SINARMAS for 2 years from 2019 - 2021. As for work experience in the web developer section, I have very little experience working on projects but I have won several web developer competitions on campus</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default about