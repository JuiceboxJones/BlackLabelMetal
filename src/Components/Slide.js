import React from 'react';
//import { Zoom } from 'react-slideshow-image';
import './Slide.css'
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const images = [
  require('../Assets/Slides/blmSlide1.png'),
  require('../Assets/Slides/blmSlide2.png'),
  require('../Assets/Slides/blmSlide3.png'),
  require('../Assets/Slides/blmSlide4.png'),
  require('../Assets/Slides/blmSlide5.png'),
  require('../Assets/Slides/blmSlide6.png'),
  require('../Assets/Slides/blmSlide7.png')
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="GalleryCtr">
      <Gallery
        style={{
          height: '100%',
          width: '100%'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map((image, index) => (
          <GalleryImage key={index} objectFit="contain" src={image} />
        ))}
      </Gallery>
    </div>
  );
}

export default Slideshow;

// const zoomOutProperties = {
//   duration: 5000,
//   transitionDuration: 1000,
//   infinite: true,
//   indicators: false,
//   scale: 1.012,
//   arrows: true
// }

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Zoom {...zoomOutProperties}>
//           {
//             images.map((pic, index) =>
//             <img key={index}
//             style={{width: "100%"}}
//             src={pic}
//             alt='slidePic' />)
//           }
//         </Zoom>
//       </div>
//     )
// }

// export default Slideshow;
