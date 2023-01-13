import React from 'react'
import './about.css'
import SMILINGME from '../../assets/smiling.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={SMILINGME} alt="my pic" />
          </div>
        </div>

        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed projects/Tasks</small>
            </article>
          </div>

          <p>
       Motivated and dedicated software engineer conversant with software development right from requirement analysis, design and knowledge of  cloud Engineering. Highly passionate about technology. Eager to grow and use my technical knowledge in software development.
            </p>

            <a href='#contact' className="btn btn-primary">Let's talk</a>

        </div>
      </div>
      </section>
  )
}

export default About