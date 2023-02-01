import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>YISHAK KIBRU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/yishakk"><FaFacebookF/></a>
        <a href="https://instagram.com/yishak_kibru?igshid=YWJhMjlhZTc="><FiInstagram/></a>
        <a href="https://twitter.com/yishak_kibru"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YISHAK KIBRU. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
