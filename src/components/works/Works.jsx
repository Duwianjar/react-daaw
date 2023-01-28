import React from 'react'
import './works.css'
import IMG1 from '../../assets/avatar1.png'
import IMG2 from '../../assets/avatar2.jpg'
import IMG3 from '../../assets/avatar3.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    name: 'APP SINARMAS',
    deskripsi: 'Sinarmas app is one of the pillars of the Sinarmas company in the field of paper cartons and boxes, for the company where I used to be PT Indah Tips Pulp & Paper Serang. I worked there from 2019 to 2021 and my position was a flexo machine operator in charge of running machines for printing carton boxes or cardboard'
  },
  {
    image: IMG2,
    name: 'Alfalah Grafika',
    deskripsi: 'Alafalh Graphic is a company engaged in small cardboard printing, where I worked as a deputy operator'
  },
  {
    image: IMG3,
    name: 'Martabak Manis Pandawa',
    deskripsi: 'Pandawa Sweet Martabak or CV. Gelora Sakti Mulia is a company in the culinary field, in this experience I worked as an outlet keeper in Wates Kulon Progo'
  }
]

const Works = () => {
  return (
    <section id='works'>
      <h5>where I used to work</h5>
      <h2>Work Experience</h2>

      <Swiper className="container works__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image,name, deskripsi}, index) => {
            return (
              <SwiperSlide key={index} className="work">
                <div className="work__img">
                <img src={image} alt=''/>
                </div>
                <h2 className='work__name'>{name}</h2>
                <h4 className='work__deskripsi'>{deskripsi}</h4>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Works