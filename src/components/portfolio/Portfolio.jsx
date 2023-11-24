import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Portfolio</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>First Portfolio Website Using Bootstrap</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Duwianjar/duwianjar.github.io/tree/main/Bootstrap" className='btn' target="_blank" without rel='noreferrer' >Github</a>
            <a href="https://duwianjar.github.io/Bootstrap" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>My second portfolio website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Duwianjar/duwianjar.github.io/tree/main/Responsive" className='btn' target="_blank" without rel='noreferrer' >Github</a>
            <a href="https://duwianjar.github.io/Responsive" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is my third portfolio website that I created using the Tailwind framework</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/duwianjar.github.io/tree/main/Tailwind" className='btn' target="blank" without rel='noreferrer' >Github</a>
          <a href="https://duwianjar.github.io/Tailwind" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>A Website that I created with my friend to take part in a parmatika competition</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/akatsuki" className='btn' target="_blank" without rel='noreferrer' >Github</a>
          <a href="https://sman1bagansinembah.000webhostapp.com" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>The website rate film that I made uses React JS and uses the API from the movie DB</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/Movie" className='btn' target="_blank" without rel='noreferrer' >Github</a>
          <a href="https://duwianjar.github.io/Movie" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>A Website that I created with my friend to take part in a Createin competition</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/akatsuki" className='btn' target="_blank" without rel='noreferrer' >Github</a>
          <a href="https://duwianjarariwibowo.000webhostapp.com/" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Is a Website for the selection of the chairman of the UNJAYA student executive body</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/Kpum" className='btn' target="_blank" without rel='noreferrer' >Github</a>
          <a href="https://bem.unjaya.ac.id/kpum" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This website is a website for a grocery store that I created as a grade for my database course project</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/tokoKelontong" className='btn' target="_blank" without rel='noreferrer' >Github</a>
          <a href="https://duwianjarariwibowo.000webhostapp.com/TokoKelontong" className='btn btn-primary' target="_blank" without rel='noreferrer' >Live Demo</a>
          </div>
          </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>This website is the website you are opening now that I created to update my portfolio and hone my skills</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Duwianjar/react-daaw" className='btn' target="_blank" without rel='noreferrer'>Github</a>
          <a href="https://duwianjar.github.io/react-daaw" className='btn btn-primary' target="_blank" without rel='noreferrer'>Live Demo</a>
          </div>
          </article>
      </div>
    </section>
  )
}

export default Portfolio
