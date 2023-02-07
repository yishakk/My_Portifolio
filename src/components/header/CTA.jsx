import React from 'react'
import Resume from "../../assets/onome-resume.pdf"
import { useState } from 'react'

const CTA = () => {
  const [setActiveNav] = useState('#');
  return (
    <div className='cta'>
        <a href={Resume} download className="btn">Download CV</a>
        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className="btn btn-primary">Let's talk</a>

    </div>
  )
}

export default CTA