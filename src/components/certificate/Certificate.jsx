import React from 'react'
import './certificate.css'
import PWEB from '../../assets/pweb.png'
import CREATEIN from '../../assets/createin.png'
import INOVATIVE from '../../assets/inovative.png'
import {AiOutlineRight} from 'react-icons/ai'

const Certificate = () => {
  return (
    <section id='certificate'>
      <h5>What Certificates do I have</h5>
      <h2>Certificates</h2>

      <div className="container certificates__container">
        <article className='certificate'>
          <div className="img">
          <img src={PWEB} alt="Certificate_1" />
          </div>
              <div className="certificate__head">
                <h3>1st PWEB Parmatika 2022</h3>
              </div>
              <ul className='certificate__list'>
                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p>I got this certificate with my friends from a website programming competition held by the informatics student association and we won 1st place in this competition.</p>
                </li>
                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p> <a href="https://www.instagram.com/p/CgOnelqv1h3/?igshid=NDdhMjNiZDg%3D" target="_blank" without rel='noreferrer' >Click here</a> </p>
                </li>
              </ul>
        </article>
        {/* END OF PWEB */}
        <article className='certificate'>
        <div className="img">
          <img src={CREATEIN} alt="Certificate_1" />
          </div>
              <div className="certificate__head">
                <h3>2nd Web Design Createin 2022</h3>
                </div>
              <ul className='certificate__list'>
                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p>like the certificate beside this certificate I got with my friend by participating in a different competition, namely the website design competition which was held by creatin from the information systems study program and in this competition we took second place</p>
                </li>
                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p> <a href="https://www.instagram.com/p/Cj4UjM4Pi6s/?igshid=NDdhMjNiZDg%3D" target="_blank" without rel='noreferrer' >Click here</a> </p>
                </li>
                
              </ul>
        </article>
        {/* END OF CREATEIN 2nd */}
        <article className='certificate'>
          <div className="img">
            <img src={INOVATIVE} alt="Certificate_1" />
          </div>
              <div className="certificate__head">
                <h3>Most Innovative Web Design Createin 2022</h3>
              </div>
              <ul className='certificate__list'>
                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p>In this certificate, the competition that I took part in was the same as my last, besides the web design competition that was held by Createin from the Information Systems Study Program and we got the title of the most innovative team.</p>
                </li>

                <li>
                  <AiOutlineRight className='certificate__list-icon'/>
                  <p> <a href="https://www.instagram.com/p/Cj4UjM4Pi6s/?igshid=NDdhMjNiZDg%3D" target="_blank" without rel='noreferrer' >Click here</a> </p>
                </li>
              </ul>
        </article>
        {/* END OF CREATEIN */}
      </div>
    </section>
  )
}

export default Certificate