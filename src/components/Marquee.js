import React from "react";
import image1 from '../assets/gallery-1.jpg'
import image2 from '../assets/gallery-2.jpg'
import image3 from '../assets/gallery-3.jpg'
import image4 from '../assets/gallery-4.jpg'
import image5 from '../assets/gallery-5.jpg'
import image1low from '../assets/lowres/gallery-1-lowres.jpg';
import image2low from '../assets/lowres/gallery-2-lowres.jpg';
import image3low from '../assets/lowres/gallery-3-lowres.jpg';
import image4low from '../assets/lowres/gallery-4-lowres.jpg';
import image5low from '../assets/lowres/gallery-5-lowres.jpg';


const Marquee = () => {
  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          <img
            srcSet={`${image1low} 200w, ${image1} 1000w`}
            src={image1low}
            alt=""
            
          />
          <img
            srcSet={`${image2low} 200w, ${image2} 1000w`}
            src={image2low}
            alt=""
          />
          <img
            srcSet={`${image3low} 200w, ${image3} 1000w`}
            src={image3low}
            alt=""
          />
          <img
            srcSet={`${image4low} 200w, ${image4} 1000w`}
            src={image4low}
            alt=""
          />
          <img
            srcSet={`${image5low} 200w, ${image5} 1000w`}
            src={image5low}
            alt=""
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
				<img
            srcSet={`${image1low} 200w, ${image1} 1000w`}
            src={image1low}
            alt=""
          />
          <img
            srcSet={`${image2low} 200w, ${image2} 1000w`}
            src={image2low}
            alt=""
          />
          <img
            srcSet={`${image3low} 200w, ${image3} 1000w`}
            src={image3low}
            alt=""
          />
          <img
            srcSet={`${image4low} 200w, ${image4} 1000w`}
            src={image4low}
            alt=""
          />
          <img
            srcSet={`${image5low} 200w, ${image5} 1000w`}
            src={image5low}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Marquee;
