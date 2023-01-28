import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Certificate from './components/certificate/Certificate'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Certificate /> 
      <Portfolio />
      <Works />
      <Contacts />
      <Footer />
    </>
  )
}

export default App 