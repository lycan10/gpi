import React, {useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Map from '../../components/map/Map'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import banner from '../../assets/contact-im.jpg'
import icon1 from '../../assets/smartphone.png'
import icon2 from '../../assets/planet-earth.png'
import icon3 from '../../assets/airplane.png'
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

    const contactData = [
      {
        id: 1,
        img: icon1 ,
        tel: '090X XXX XXXX' ,
        content: 'Support 24/7 - Online 24 hours'
      },
      {
        id: 2,
        img: icon2 ,
        tel: 'No. 3 Tito Bros Street, Asokoro Abuja' ,
        content: 'No. 3 Tito Bros Street,Asokoro Abuja'
      },
      {
        id: 3,
        img: icon3 ,
        tel: 'gpifinancing@gmail.com' ,
        content: 'Mon - Sat: 8:00 - 18:00'
      }
    ]
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-header'>
        <Navbar />
        <div className='contact-header-container'>
            <div className='contact-image' >
            <div className='contact-opacity'></div>
              <img src={banner} id='contacttts' />
            </div>
            <div className='contact-title' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        <div className='contact-content' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div className='services-content-div'>
            <div className='about-us-title'></div>
            <h3>GET IN TOUCH</h3>
            <div className='about-us-title'></div>
        </div>
        <h1>Contact Us Now</h1>
          <p>At GPI Financing, we continuously strive to be pioneers in our industry, fostering an entrepreneurial spirit that consistently seeks improvement. </p>
        </div>
        <div className='contact-details' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
         {
          contactData.map((item)=>{
             return (<div key={item.id} className='contact-details-container'>
                <img src={item.img}/>
                <h1>{item.tel}</h1>
                <p>{item.content}</p>
              </div>
             )
          })
         }
         </div>
        <div className='contact-address'>
            <div className='contact-form' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <h1>Send Us A Message</h1>
              <form >
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='text' placeholder='Subject' />
                <textarea placeholder='Message' />
                <button>Submit</button>
              </form>
            </div>
        </div>
       <div className='contact-map'>
        <Map />
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default Contact
