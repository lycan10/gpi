import React,{useEffect, useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import man from '../../assets/man.png'
import { HashLink } from 'react-router-hash-link';

const Services = () => {
    const [activeTab, setActiveTab] = useState('home'); // State to manage the active tab

    useEffect(() => {
        AOS.init();
      }, [])

      const handleTabSelect = (eventKey) => {
        setActiveTab(eventKey);
      };

      const getLinkForTab = () => {
        switch (activeTab) {
          case 'home':
            return '/finance#finance';
          case 'profile':
            return '/investment#investment';
          case 'contact':
            return '/advisory#advisory';
          default:
            return '';
        }
      };

  return (
    <div className='services'>
       
        <div className='services-container'>
            <div className='services-content-image-background'>
            <div  className='services-img-background'></div>
                <div className='services-content-image'>
                    <img src={man}/>
                </div>
            </div>
            <div className='services-content-container' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <div className='services-content-title'>
                    <div className='services-content-div'>
                        <h3 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">OUR SERVICES</h3>
                        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className='about-us-title'></div>
                    </div>
                    <h1>What We Offer</h1>
                    <p>Our financing services focus on our clients’ most critical issues and seek to provide solutions to three (3) major areas, including; Finance, Investments, and Advisory. </p>
                </div>
                <div className='services-content-tabs'>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                        transition={true}
                        activeKey={activeTab} // Set the active tab based on state
                        onSelect={handleTabSelect} // Handle tab selection
                        >
                        <Tab  eventKey="home" title="Finance">
                        GPI Financing offers tailored financial solutions to businesses of all sizes, whether start-ups or established businesses. Recognizing the vital role of micro, small and medium-sized enterprises (MSMEs) in driving economic growth, GPI Financing specializes in financing businesses from with working capital loans, equipment financing, commercial mortgages, or trade finance. 
                        </Tab>
                        <Tab eventKey="profile" title="Investment">
                        Catering to high-net-worth individuals and families, GPI Financing provides bespoke private investment solutions designed to preserve and enhance wealth. Through in-depth analysis, risk assessment, and personalized portfolio management, GPI Financing assists clients in optimizing their investments across various asset classes, including real estate, private equity, venture capital, and other alternative investment vehicles.
                        </Tab>
                        <Tab eventKey="contact" title="Advisory">
                        In addition to financing solutions, GPI Financing provides advisory services to businesses, offering expertise in financial structuring, feasibility studies, market analysis, and business planning. The advisory team at GPI Financing works closely with clients to provide strategic insights and guidance that support their financial decision-making processes.
                        </Tab>
                    </Tabs>
                </div>
                <div className='services-content-cta'>
                    <HashLink className='services-link' to={getLinkForTab()}><span>Learn more</span></HashLink>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services
