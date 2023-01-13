import React from 'react'
import './testimonials.css'
import AVAR1 from '../../assets/Tunde.PNG'
import AVAR2 from '../../assets/Racheal.PNG'
import AVAR3 from '../../assets/Funmi.PNG'


// import Swiper core and required modules//
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles//
import 'swiper/css';
import 'swiper/css/pagination';


//array method//
const data = [
  {
    avatar: AVAR1,
    name: 'Tunde',
    review: "I Hired Mafabi build the backend of awebsite using PHP and SQL.He took the time to assess my requriements and kept me informed on how the development was going throught the whole process.He explained things easily, without using technical jargons. A hard working professional. I highly recommend. I asked another developer to do a code review, and he said the code Mafabi wrote was readable and clear."
      },  
      
  {
    avatar: AVAR2,
    name: 'Racheal',
    review: "Mafabi's proactiveness is really commendable. He approaches His goals and tasks with determination and resilience. I admire His eagerness to learn and improve himself and his skills. He is definitely a gem and would benefit employers and other employees."
  },

  {
    avatar: AVAR3,
    name: 'Funmi',
    review: "Mafabi makes a lasting impression of energy and passion through a warm and receptive personality. He is a good team player and He is always willing to help others. he tackles all assignments with dedication and enthusiasm. He is very focused and has aptitude to learn new things. He is an asset to any employer and I endorse him for any endeavor he chooses to pursue."
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
      
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
             <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='Avatar' />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
               {review}
              </small>
             </SwiperSlide>

            )
          })     }
      {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVAR1} alt='Avatart 1' />
          </div>
          <h5 className="client__name">Tunde</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur temporibus repellat eum, ducimus neque iure tempore dolore eius error!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVAR1} alt='Avatart 1' />
          </div>
          <h5 className="client__name">Tunde</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur temporibus repellat eum, ducimus neque iure tempore dolore eius error!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVAR1} alt='Avatart 1' />
          </div>
          <h5 className="client__name">Tunde</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur temporibus repellat eum, ducimus neque iure tempore dolore eius error!
          </small>
        </article> */}

      </Swiper>

    </section>
  )
}

export default Testimonials
