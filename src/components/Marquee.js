import React from "react";
import image1 from "../assets/gallery-1.webp";
import image2 from "../assets/gallery-2.webp";
import image3 from "../assets/gallery-3.webp";
import image4 from "../assets/gallery-4.webp";
import image5 from "../assets/gallery-5.webp";
import image1low from "../assets/lowres/gallery-1-lowres.webp";
import image2low from "../assets/lowres/gallery-2-lowres.webp";
import image3low from "../assets/lowres/gallery-3-lowres.webp";
import image4low from "../assets/lowres/gallery-4-lowres.webp";
import image5low from "../assets/lowres/gallery-5-lowres.webp";

const Marquee = () => {
  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          <img
            src={image1low}
            srcSet={`${image1} 1800w, ${image1low} 1200w`} 
            alt=""
          />
          <img
             src={image2low}
             srcSet={`${image2} 1800w, ${image2low} 1200w`} 
            alt=""
          />
          <img
             src={image3low}
             srcSet={`${image3} 1800w, ${image3low} 1200w`} 
            alt=""
          />
          <img
            src={image4low}
            srcSet={`${image4} 1800w, ${image4low} 1200w`} 
            alt=""
          />
          <img
              src={image5low}
              srcSet={`${image5} 1800w, ${image5low} 1200w`} 
            alt=""
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
              src={image1low}
              srcSet={`${image1} 1800w, ${image1low} 1200w`} 
            alt=""
          />
          <img
              src={image2low}
              srcSet={`${image2} 1800w, ${image2low} 1200w`} 
            alt=""
          />
          <img
              src={image3low}
              srcSet={`${image3} 1800w, ${image3low} 1200w`} 
            alt=""
          />
          <img
             src={image4low}
             srcSet={`${image4} 1800w, ${image4low} 1200w`} 
            alt=""
          />
          <img
             src={image5low}
             srcSet={`${image5} 1800w, ${image5low} 1200w`} 
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Marquee;
