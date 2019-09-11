import React from 'react';
import { Zoom } from 'react-slideshow-image';
import './Slide.css'


 
const images = [
  require('../Assets/Slides/blmSlide1.png'),
  require('../Assets/Slides/blmSlide2.png'),
  require('../Assets/Slides/blmSlide3.png'),
  require('../Assets/Slides/blmSlide4.png'),
  require('../Assets/Slides/blmSlide5.png'),
  require('../Assets/Slides/blmSlide6.png'),
  require('../Assets/Slides/blmSlide7.png'),
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 1.012,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((pic, index) => 
            <img key={index} 
            style={{width: "100%"}} 
            src={pic}
            alt='slidePic' />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;