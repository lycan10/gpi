import React,{useEffect, useRef} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './servicesPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Stats from '../../components/stats/Stats';



const advisoryData = [
  {
    id: 0,
    num: '01.',
    title: 'Financial Planning',
    content: 'GPI Financing assists clients in developing tailored financial plans that align with their long-term goals. By considering factors such as risk tolerance, cash flow management, retirement planning, and wealth preservation, GPI Financing helps clients create a roadmap for financial stability and growth.'
  },
  {
    id: 1,
    num: '02.',
    title: 'Investment Advisory',
    content: 'With deep knowledge of investment markets and a research-driven approach, GPI Financing offers expert investment advice and portfolio management services. Whether clients seek growth opportunities, income generation, or a balanced investment approach, GPI Financing provides tailored strategies to maximize returns while managing risk.'
  },
  {
    id: 2,
    num: '03.',
    title: 'Retirement Planning',
    content: 'GPI Financing helps individuals plan for a secure and comfortable retirement by offering customized retirement planning services. From assessing retirement needs and creating retirement income streams to optimizing pension plans and social security benefits, GPI Financing ensures clients have a solid retirement plan in place.'
  },
  {
    id: 3,
    num: '04.',
    title: 'Wealth Management',
    content: 'GPI Financing assists high-net-worth individuals and families in managing their wealth effectively. Through a comprehensive approach that includes investment management, tax planning, estate planning, and philanthropic strategies, GPI Financing helps clients preserve and grow their wealth for future generations.'
  },
  {
    id: 4,
    num: '05.',
    title: 'Risk Management',
    content: 'GPI Financing helps clients identify and mitigate potential risks that may impact their financial well-being. By evaluating insurance needs, assessing risk tolerance, and implementing risk management strategies, GPI Financing provides clients with peace of mind and financial protection.'
  },
  {
    id: 5,
    num: '06.',
    title: 'Business Financial Advisory',
    content: 'GPI Financing offers expert financial advisory services to businesses, including financial analysis, cash flow management, capital structure optimization, and growth strategies. With a deep understanding of corporate finance, GPI Financing assists businesses in making sound financial decisions that drive profitability and sustainable growth.'
  },
  {
    id: 6,
    num: '07.',
    title: 'Tax Planning',
    content: 'GPI Financing provides comprehensive tax planning strategies to minimize tax liabilities and optimize tax efficiency for individuals and businesses. With expertise in tax laws and regulations, GPI Financing helps clients navigate the complexities of tax planning to achieve optimal financial outcomes.'
  }
  
];

const Advisory = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="services-page">
      <div className="services-page-container">
      
      <div className="parallax-container">
          <Navbar />
        <div id='advisory' className='service-header-container'>
          <div className="parallax-image">
            <div className="services-header-opacity"></div>
          </div>
          <div className="services-title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Advisory</h1>
          </div>
        </div>
      </div>
      <div className="services-content2-container">
          <div className="services-page-title">
            <div className="services-main-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className='aboutH-content-div'>
                <h1>ADVISORY</h1>
                <div className='about-us-title'></div>
              </div>
              <p>
                In addition to financing solutions, GPI Financing provides advisory services to businesses, offering expertise in financial structuring, feasibility studies, market analysis, and business planning. The advisory team at GPI Financing works closely with clients to provide strategic insights and guidance that support their financial decision-making processes.
              </p>
            </div>
            <div className="services-page-cards" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              {advisoryData.map((item) => (
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

export default Advisory;

