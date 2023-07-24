import React,{useEffect} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './servicesPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Stats from '../../components/stats/Stats';



const investmentData = [
  {
    id: 0,
    num: '01.',
    title: 'Private Investments',
    content: 'Catering to high-net-worth individuals and families, GPI Financing provides bespoke private investment solutions designed to preserve and enhance wealth. Through in-depth analysis, risk assessment, and personalized portfolio management, GPI Financing assists clients in optimizing their investments across various asset classes, including real estate, private equity, venture capital, and other alternative investment vehicles.'
  },
  {
    id: 1,
    num: '02.',
    title: 'Professional Investments',
    content: 'GPI Financing offers professional investment services to individuals and businesses seeking to grow their wealth through strategic investment opportunities. Leveraging extensive market research, financial expertise, and a robust network of industry connections, GPI Financing helps clients identify and navigate diverse investment options, such as stocks, bonds, mutual funds, and alternative investments.'
  },
  {
    id: 2,
    num: '03.',
    title: 'Sukuk',
    content: 'GPI Financing facilitates sukuk  and  issuances, providing access to capital markets for organizations seeking long-term  financing. By assisting with the issuance process, underwriting, and investor relations, GPI Financing enables companies to raise funds efficiently while offering attractive investment opportunities to investors seeking fixed-income securities.'
  }
  
];

const Investment = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="services-page">
      <div className="services-page-container">
      
      <div className="parallax-container">
          <Navbar />
        <div id='investment' className='service-header-container'>
          <div className="parallax-image">
            <div className="services-header-opacity"></div>
          </div>
          <div className="services-title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Investment</h1>
          </div>
        </div>
      </div>
      <div className="services-content2-container">
          <div className="services-page-title">
            <div className="services-main-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className='aboutH-content-div'>
                <h1>INVESTMENT</h1>
                <div className='about-us-title'></div>
              </div>
              <p>
              At GPI Financing, we are dedicated to helping you make informed investment decisions, providing tailored solutions to meet your unique financial goals. With our expertise and commitment to excellence, we strive to maximize your investments' potential and secure a prosperous future together.
              </p>
            </div>
            <div className="services-page-cards" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              {investmentData.map((item) => (
                <div key={item.id} className="services-cards-content">
                  <h3 style={{color:'#FE0000' }}>{item.num}</h3>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
       
        <div className='finance-cta1'>
        <Stats />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Investment;
