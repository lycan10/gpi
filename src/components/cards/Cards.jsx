import React from 'react'
import image1 from '../../assets/innovation.jpg'
import image2 from '../../assets/technical.jpg'
import image3 from '../../assets/safety.jpeg'

import './cards.css'

const cards = [
    {
        id:0,
        img: image1,
        Title: "Innovation and Excellence",
        content: 'We embrace a culture of continuous growth and strive for innovation in all aspects of our work. By pushing the boundaries of what is possible, we deliver forward-thinking solutions that set new industry standards.'
    },
    {
        id:1,
        img: image2 ,
        Title: "Technical Expertise",
        content: 'We pride ourselves on the depth and breadth of our technical expertise. Our team consists of highly skilled professionals with a wealth of knowledge and experience across various disciplines. '
    },
    {
        id:2,
        img: image3 ,
        Title: "Health and Safety",
        content: 'We are committed to sustainability and social responsibility in all our projects. We integrate environmentally friendly practices, promote energy efficiency, and prioritize the use of sustainable materials.'
    },
]
const Cards = () => {
  return (
    <div className='about-cards'  >
    {
        cards.map((item)=>{
            return(
            <div className='about-card-container' key={item.id}>
                <div className='about-cards-image'>
                    <img className='about-cards-img' src={item.img} />
                </div>
                <div className='about-cards-content'>
                    <h1>{item.Title}</h1>
                    <p> {item.content} </p>
                </div>
            </div>
            )
        })
    }
    
: 

    </div>
  )
}

export default Cards
