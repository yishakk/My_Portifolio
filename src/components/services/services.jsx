import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        <article className='service'>
          <div className="service__head">
            <h3>  Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Knowledge of HTML, CSS, JavaScript, PHP,python, and other relevant web design coding languages</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Create and test applications for websites</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Collaborate</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Maintain and update websites</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Troubleshoot website problems</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Stay up-to-date on technology
</p>
          </li>
          </ul>
        </article>
        {/* END OF Web Development */}


        <article className='service'>
          <div className="service__head">
            <h3>IT Support</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Installing and configuring computer hardware, software, systems, networks, and scanners</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Monitoring and maintaining computer systems and networks</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Responding in a timely manner to service issues and requests</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Providing technical support across the company -this may be in person or over the phone</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Setting up accounts for new users</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Testing new technology</p>
          </li>
          </ul>
        </article>
        {/* END OF IT SUPPORT */}

        <article className='service'>
          <div className="service__head">
            <h3>Cloud Engineering</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Seting up a cloud solution environment (GCP-Google Cloud Platform)</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Deploying and Implementing Cloud solutions</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Configuring Access and Security</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Carrying out Storage and Database Services</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Load balancing and AutoScaling</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Monitoring Critical systems</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Configuring Google cloud Services for observability</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Monitoring Application Performance</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Configuring Access and Security</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Automating the Deployment of Networks Using Terraform</p>
          </li>
          
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services