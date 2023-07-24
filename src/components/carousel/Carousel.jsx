import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'
import img1 from '../../assets/gold.jpg';
import img3 from '../../assets/carousel4.jpg';
import img4 from '../../assets/about-img.jpg'


function CarouselFadeExample() {
  return (
    <Carousel fade interval={3500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
       
        <Carousel.Caption>
          <h3>Smart Investing Made Simple</h3>
          <p>Learn How to Grow Your Money and Secure Your Future.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Navigate the Financial Landscape</h3>
          <p>
          Stay Informed with the Latest Market Insights and Trends.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Financial Freedom Awaits</h3>
          <p>
          Empower Yourself with the Tools and Knowledge to Achieve Your Goals.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;