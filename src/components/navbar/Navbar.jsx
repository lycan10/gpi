import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/WHITE.png'
import './navbar.css'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri"
import { HashLink } from 'react-router-hash-link';

const Menu = () => (
    <>
    <li>
            <Link className='link-cta' to='/' ><span>Home</span></Link>
        </li>
        <li>
            <Link className='link-cta' to='/about'><span>About us</span></Link>
        </li>
        <li>
            <a className='link-cta' to='/services'><span>Services</span></a>
                <ul className='dropdown slide-bottom'>
            <li>
            <Link className='link-cta' to='/finance'><span style={{color:'white'}}>Finance</span></Link>
            </li>
            <li>
            <Link className='link-cta' to='/investment'><span style={{color:'white'}}>Investment</span></Link>
           </li>
            <li>
                <Link className='link-cta' to='/advisory'><span style={{color:'white'}}>Advisory</span></Link>
            </li>
            </ul>
        </li>
        <li>
            <Link className='link-cta' to='/contact'><span>Contact</span></Link>
        </li>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt='company-logo' /></Link>
            </div>
            <div className='navbar-links'>
                <ul>
                   <Menu />
                    
                </ul>

            </div>
            <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
                    </div>
            <div className='navbar-menu-mini '>
        {
            toggleMenu ?
            <RiCloseLine color='#fff' size={30} onClick={()=>setToggleMenu(false)}/>
            : 
            <RiMenu3Line color='#fff' size={30} onClick={()=>setToggleMenu(true)}/>
        }
        {
            toggleMenu && (
                <div className="navbar-menu_container " >
                    <div className={`navbar-menu_links ${ toggleMenu ? "slide-bottom" : "slide-top"}`}>
                        <nav >
                          <ul>
                          <li>
            <HashLink className='link-cta' to='/#header' ><span>Home</span></HashLink>
        </li>
        <li>
            <HashLink className='link-cta' to='/about#aboutss'><span>About us</span></HashLink>
        </li>
            <li>
            <HashLink className='link-cta' to='/finance#finance'><span style={{color:'white'}}>Finance</span></HashLink>
            </li>
            <li>
            <HashLink className='link-cta' to='/investment#investment'><span style={{color:'white'}}>Investment</span></HashLink>
           </li>
            <li>
                <HashLink className='link-cta' to='/advisory#advisory'><span style={{color:'white'}}>Advisory</span></HashLink>
            </li>
            <li>
                <HashLink className='link-cta' to='/contact#contacttts'><span>Contact</span></HashLink>
            </li>
                            <div className='social2-icon'>
                                <AiFillFacebook  className='footer-icon'/>
                                <AiFillTwitterSquare  className='footer-icon'/>
                                <AiFillLinkedin  className='footer-icon'/>
                            </div>
                          </ul>
                        </nav>
                      </div>
                    </div>
            )
        }
                
            </div>
        </div>

    </div>
  )
}

export default Navbar
