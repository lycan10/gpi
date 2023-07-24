import React from 'react'
import './footer.css'
import logo from '../../assets/WHITE.png'
import { HashLink } from 'react-router-hash-link';
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
            <div className='footer-image'>
                <img src={logo} alt='company-logo'/>
            </div>
            <div className='footer-company'>
                <h1>Company</h1>
                <ul>
                    <li>
                        <HashLink className='link-cta' to='/#header' ><span>Home</span></HashLink>
                    </li>
                    <li>
                        <HashLink className='link-cta' to='/about#aboutss'><span>About us</span></HashLink>
                    </li>
                    <li>
                        <HashLink className='link-cta' to='/contact#contacttts'><span>Contact</span></HashLink>
                     </li>
                </ul>
            </div>
            <div className='footer-company'>
                <h1>Services</h1>
                <ul>
                    <li>
                        <HashLink className='link-cta' to='/finance#finance'><span style={{color:'white'}}>Finance</span></HashLink>
                    </li>
                    <li>
                        <HashLink className='link-cta' to='/investment#investment'><span style={{color:'white'}}>Investment</span></HashLink>
                    </li>
                    <li>
                        <HashLink className='link-cta' to='/advisory#advisory'><span style={{color:'white'}}>Advisory</span></HashLink>
                    </li>
                </ul>
            </div>
            <div className='footer-info'>
            <h1>Location</h1>
                <p>090X XXX XXXX</p>
                <p>gpifinancing@gmail.com</p>
                <p>3, Tito Bros Street, Asokoro, Abuja.</p>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>@ {date.getFullYear()} GPI FINANCING</p>
            <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
