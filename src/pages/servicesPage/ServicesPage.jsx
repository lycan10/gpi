import React,{useEffect, useRef} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './servicesPage.css';
import loan from '../../assets/loan.jpg'
import loan2 from '../../assets/loan-doc.jpg'
import video1 from '../../assets/loan-vid2.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Stats from '../../components/stats/Stats';



const servicesData = [
  {
    id: 0,
    num: '01.',
    title: 'Business/MSME Financing',
    content: 'GPI Financing offers tailored financial solutions to businesses of all sizes, whether start-ups or established businesses. Recognizing the vital role of micro, small and medium-sized enterprises (MSMEs) in driving economic growth, GPI Financing specializes in financing businesses from with working capital loans, equipment financing, commercial mortgages, or trade finance. With a deep understanding of the business landscape, GPI Financing helps entrepreneurs and companies access the funds they need to grow and thrive.'
  },
  {
    id: 1,
    num: '02.',
    title: 'Corporate Financing',
    content: 'GPI Financing understands the complex financial needs of large enterprises and corporations. We offer specialized financing solutions to help you achieve your strategic objectives. From working capital loans and corporate bonds to mergers and acquisitions financing, GPI Financing provides customized funding options that support corporate growth, expansion, and investment opportunities.'
  },
  {
    id: 2,
    num: '03.',
    title: 'Project Financing',
    content: 'GPI Financing provides capital for large-scale projects in sectors such as infrastructure, real estate, energy, and more. With expertise in structuring and syndicating project financing arrangements, GPI Financing collaborates with project sponsors, investors, and other stakeholders to ensure the successful execution of projects from inception to completion.'
  },
  
  {
    id: 3,
    num: '04.',
    title: 'Trade Finance',
    content: 'GPI Financing offers trade finance solutions to facilitate international and domestic trade activities. From letters of credit to trade guarantees, GPI Financing assists businesses in managing their trade-related financial needs while ensuring compliance with Islamic finance principles, and trade policies.'
  },
  {
    id: 4,
    num: '05.',
    title: 'Institutional and Charitable Financing',
    content: 'GPI Financing partners with institutional investors, foundations, endowments, and charitable organizations to develop customized financing solutions that align with their specific financial objectives. Whether it is structuring sustainable investment strategies, impact investing, or supporting philanthropic initiatives, GPI Financing leverages its expertise to create meaningful financial solutions for institutional and charitable clients.' },
  
];

const ServicesPage = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      videoElement.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    };

    playVideo();
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="services-page">
      <div className="services-page-container">
      
      <div className="parallax-container">
          <Navbar />
        <div id='finance' className='service-header-container'>
          <div className="parallax-image">
            <div className="services-header-opacity"></div>
          </div>
          <div className="services-title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Finance</h1>
          </div>
        </div>
      </div>
      <div className="services-content2-container">
          <div className="services-page-title">
            <div className="services-main-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className='aboutH-content-div'>
                <h1>FINANCE</h1>
                <div className='about-us-title'></div>
              </div>
              <p>
                GPI Financing offers tailored financial solutions to businesses of all sizes, whether start-ups or established businesses. Recognizing the vital role of micro, small and medium-sized enterprises (MSMEs) in driving economic growth, GPI Financing specializes in financing businesses from with working capital loans, equipment financing, commercial mortgages, or trade finance.
              </p>
            </div>
            <div className="services-page-cards" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              {servicesData.map((item) => (
                <div key={item.id} className="services-cards-content">
                  <h3 style={{color:'#FE0000' }}>{item.num}</h3>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
        <div className='services-video'>
          <video ref={videoRef} className='video' src={video1} type='video/mp4' loop muted autoPlay playsInline/>
        </div>
        <div className="services-page-main">
        <div className="services-page-main-title">
        <div className='aboutH-content-div'>
                <h1>FINANCING APPLICATION CRITERIA</h1>
                <div className='about-us-title'></div>
              </div>
            <p>
              At GPI Financing, we understand that obtaining the right loan can be a critical step towards achieving your financial goals. That's why we have designed our loan application criteria to be comprehensive and tailored to meet your specific needs. We prioritize responsible lending practices and work closely with our clients to ensure a seamless and transparent application process.
            </p>
        </div>
        <div className="services-page-main-container">   
          <div className="services-page-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            
            <p>1. Business must be registered for at least 1 year with the Corporate Affairs Commission (CAC) or the relevant business regulatory body.
              <br/> 2. Business Plan: The business should have a Viable business plan, business model and financial forecast.
              <br/> 3. For Project Financing, an LPO document must be made available, coupled with other relevant project documents, such as proposals, financial plan, monitoring and evaluation documents, etc. 
              <br/> 4. Financial Stability: The financial stability of the applicant is assessed to ensure their ability to meet financial obligations. This includes reviewing financial statements, cash flow projections, and evaluating the applicant's ability to generate sufficient revenue to repay the financing .
              <br/> 5. Purpose of Financing: The  purpose should be permissible, applications that demonstrate a clear and legitimate use of funds for permissible activities will be given priority.
              <br/> 6. Shariah Compliance: The foremost criterion is the adherence to Shariah principles and compliance with Islamic finance guidelines. Financing  applications from businesses or individuals involved in prohibited activities (such as alcohol, pornography, ammunition, pork production or consumption, activities that cause harm to the public, etc) according to Islamic law will not be considered. 
              <br/> 7. Creditworthiness: The creditworthiness of the applicant is assessed based on their credit history, repayment track record, and existing financial obligations. A positive credit history and a demonstrated ability to meet financial commitments are favorable factors.
            </p>
          </div>
          <div className='finance-image'>
            <img src={loan} />
          </div>
          </div>
        </div>
        <div className='finance-cta'>
        <Stats />
        </div>
        <div className="services-page-main">
        <div className="services-page-main-title">
        <div className='aboutH-content-div'>
                <h1>FINANCING APPLICATION DOCUMENTS</h1>
                <div className='about-us-title'></div>
              </div>
            <p>
            To apply for financing at GPI Financing, please provide the necessary documents for a streamlined evaluation process. These documents are listed below.
            </p>
        </div>
        <div className="services-page-main-container">   
          <div className="services-page-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            
            <p>
            1. Completed financing  Application form.
      <br/> 2. Formal Application on Company letterhead
      <br/> 3. Photocopy of Certificate & Form of Registration
      <br/> 4. For Business Financing - Business Plan which includes detailed Profile of the Business Enterprise with Curriculum Vitae of the key Management Staff
      <br/> 5. For Projects Financing - LPO document, coupled with other relevant project documents, such as project proposals, financials, monitoring and evaluation documents, etc. 
      <br/> 6. Means of Identification - (a) Passport photographs and Biometrics Verification Number (BVN). (b) Photocopy of International Passport or Driver’s License or National Identity Card or Permanent Voter’s Card.
      <br/> 7. Bank Statement of the Business Enterprise for a period of one (1) year (for existing business)
      <br/> 8. Declaration of Outstanding Liabilities to other Banks and Individuals, if any.
      <br/> 9. Two Individual external guarantors with proper means of identification such as BVN, four (4) passport photographs, Identity Cards and Letter of Intent to guarantee the financing  supported by a notarised statement of networth.
      <br/> 10. Collateral Documents.

            </p>
            <div className="our-specialization" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            
            </div>
          </div>
          <div className='finance-image2'>
            <img src={loan2} />
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
