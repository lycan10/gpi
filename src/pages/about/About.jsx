import React, {useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './about.css'
import banner from '../../assets/about-im.jpg'
import image from '../../assets/about.jpg'
import team1 from '../../assets/team12.jpg'
import team2 from '../../assets/team22.jpg'
import team3 from '../../assets/team23.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='about'>
    <div className='about-container'>
      <div className='about-header'>
          <Navbar />
          <div className='about-header-container'>
              <div className='about-image' >
              <div className='about-opacity'></div>
                <img id='aboutss' src={banner} />
              </div>
              <div className='about-title' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <h1>About Us</h1>
              </div>
          </div>
      </div>
        <div className='about-content-container'  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <div className='about-content'>
          <div className='aboutH-content-div'>
                <h1>ABOUT US</h1>
                <div className='about-us-title'></div>
                </div>
            <p>GPI Financing is a prominent non-interest financial institution that specializes in providing Sharia-compliant financing and investment solutions to permissible businesses across all industries. Established to serve a growing need for access to finance, with focus on business financing, SME financing, professional investments, private investments, Sukuk and  stocks, GPI Financing provides a comprehensive range of financing solutions which are flexible and tailored to meet your financial needs.  </p>
          </div>
          <div className='about-content-image'>
          <img src={image} />
        </div>
          </div>
        <div className='m-and-v'  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <div className='vision'>
            <h3>Vision Statement</h3>
            <p>
            To Drive Economic Development and Fostering Financial Inclusion through Shariah-Compliant Financing and Investment Solutions.
            </p>
          </div>
          <div className='mission'>
            <h3>Mission Statement </h3>
            <p>
            To facilitating the growth and development of businesses, individuals, corporations, and projects, by providing innovative financing and investment solutions, while adhering to ethical principles and promoting social responsibility.
            </p>
          </div>
        </div>
        <div className='offer'>
        <div className='about-content1' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" >
          <div className='aboutH-content-div'>
          <div className='about-us-title'></div>
              <h1>WHY US</h1>
            <div className='about-us-title'></div>
          </div>
            <p> At GPI financing, We prioritize client satisfaction, innovation, collaboration, sustainability, and integrity. By delivering tailored solutions, embracing new ideas, fostering partnerships, prioritizing environmental responsibility, and operating with transparency and ethical practices, we strive to exceed expectations and drive positive impact. </p>
          </div>
         
        </div>
        <div className='our-team'>
        <div className='about-content2' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div className='aboutH-content-div'>
            <div className='about-us-title'></div>
                <h1>OUR TEAM</h1>
              <div className='about-us-title'></div>
            </div>
            <p>Our team members are passionate about their respective fields and are committed to staying at the forefront of industry trends and advancements. </p>
          </div>
          <div className='team-members'>
            <div className='team-image' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <img src={team1} />
              <h1>Tobiloba Daniels</h1>
              <p>C.E.O</p>
            </div>
            <div className='team-image' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <img src={team2} />
              <h1>Adewole Gbadebo</h1>
              <p>Legal adviser</p>
            </div>
            <div className='team-image' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <img src={team3} />
              <h1>Tasha Akinwale</h1>
              <p>Business analyst</p>
            </div>
          </div>
        </div>

        <Footer />
    </div>
    </div> 
  )
}

export default About
