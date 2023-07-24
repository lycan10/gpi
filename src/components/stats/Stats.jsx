import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';
 
import './stats.css'

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='stats'>
    <div className='stat-container'>
    <div className='cta-background'></div>
    <div className='stat-image'></div>
        <div className='stats-content'>
            <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">BOOK A SESSION WITH US </h1>
            <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">We have continued to be innovators for our industry, with an entrepreneurial culture that is never satisfied with the status quo, for ourselves or for our clients.</p>
            
            <HashLink to='/contact#contacttts' className='stat-button' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"><span>Book an Appointment</span></HashLink>
          
        </div>
        
    </div>
      
    </div>
  )
}

export default Stats
