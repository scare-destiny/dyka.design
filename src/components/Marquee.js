import React from "react";
import image1 from '../assets/gallery-1.jpg'
import image2 from '../assets/gallery-2.jpg'
import image3 from '../assets/gallery-3.jpg'
import image4 from '../assets/gallery-4.jpg'
import image5 from '../assets/gallery-5.jpg'

const Marquee = () => {
  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          <img
            src={image1}
            alt=""
          />
          <img
            src={image2}
            alt=""
          />
          <img
            src={image3}
            alt=""
          />
          <img
            src={image4}
            alt=""
          />
          <img
            src={image5}
            alt=""
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
				<img
            src={image1}
            alt=""
          />
          <img
            src={image2}
            alt=""
          />
          <img
            src={image3}
            alt=""
          />
          <img
            src={image4}
            alt=""
          />
          <img
            src={image5}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Marquee;
