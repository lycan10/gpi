import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.149375668298!2d7.5068913751025175!3d9.05013608865759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bc3c7f0c2ed%3A0x89a52a11d3a7c376!2s3%20Tito%20Bros%20St%2C%20Asokoro%20900103%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1686695436927!5m2!1sen!2sng" 
      width="100%" 
      height="420" 
      style={{border:'none', outline:'none'}}
      >
      </iframe>
    </div>
  )
}

export default Map
