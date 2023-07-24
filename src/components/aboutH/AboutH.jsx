import React, {useEffect} from 'react'
import './aboutH.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from '../carousel/Carousel';
import { HashLink } from 'react-router-hash-link';

const AboutH = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='aboutH'>
        <div className='aboutH-container'>
            <div className='aboutH-content' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className='aboutH-content-div'>
                <h1>ABOUT US</h1>
                <div className='about-us-title'></div>
                </div>
                <h1 className='about-Header'>We Deliver Enduring Results</h1>
                <p>GPI Financing is a prominent non-interest financial institution that specializes in providing Sharia-compliant financing and investment solutions to permissible businesses across all industries. Established to serve a growing need for access to finance, with focus on business financing, SME financing, professional investments, private investments, Sukuk and  stocks, GPI Financing provides a comprehensive range of financing solutions which are flexible and tailored to meet your financial needs.  </p>
                <HashLink to={'/about#aboutss'} className='aboutH-button'><span>Read More</span></HashLink>
            </div>
            <div className='aboutH-image' >
            <Carousel />
            </div>
        </div>
    </div>
  )
}

export default AboutH
