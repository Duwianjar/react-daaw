import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import{useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><FiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#certificate" onClick={() => setActiveNav('#certificate')} className={activeNav === '#certificate' ? 'active' : ''}><AiOutlineSafetyCertificate/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav