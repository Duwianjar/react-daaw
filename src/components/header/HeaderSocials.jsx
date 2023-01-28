import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/duwi-anjar-389762221" target="_blank" without rel='noreferrer' ><BsLinkedin/></a>
        <a href="https://github.com/Duwianjar" target="_blank" without rel='noreferrer' ><FaGithub/></a>
        <a href="https://instagram.com/duwiaaw" target="_blank" without rel='noreferrer' ><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials