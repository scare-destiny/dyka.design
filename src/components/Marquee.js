import React from "react";
import image1 from "../assets/gallery-1.jpg";
import image2 from "../assets/gallery-2.jpg";
import image3 from "../assets/gallery-3.jpg";
import image4 from "../assets/gallery-4.jpg";
import image5 from "../assets/gallery-5.jpg";
import image1low from "../assets/lowres/gallery-1-lowres.jpg";
import image2low from "../assets/lowres/gallery-2-lowres.jpg";
import image3low from "../assets/lowres/gallery-3-lowres.jpg";
import image4low from "../assets/lowres/gallery-4-lowres.jpg";
import image5low from "../assets/lowres/gallery-5-lowres.jpg";

const Marquee = () => {
  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          <img
            src={image1low}
            srcSet={`${image1low} 300w, ${image1} 768w,`} 
            alt=""
          />
          <img
            src={image2low}
            srcSet={`${image2low} 300w, ${image2} 768w,`} 
            alt=""
          />
          <img
            src={image3low}
            srcSet={`${image3low} 300w, ${image3} 768w,`} 
            alt=""
          />
          <img
            src={image4low}
            srcSet={`${image4low} 300w, ${image4} 768w,`} 
            alt=""
          />
          <img
            src={image5low}
            srcSet={`${image5low} 300w, ${image5} 768w,`} 
            alt=""
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
            src={image1low}
            srcSet={`${image1low} 300w, ${image1} 768w,`} 
            alt=""
          />
          <img
            src={image2low}
            srcSet={`${image2low} 300w, ${image2} 768w,`} 
            alt=""
          />
          <img
            src={image3low}
            srcSet={`${image3low} 300w, ${image3} 768w,`} 
            alt=""
          />
          <img
            src={image4low}
            srcSet={`${image4low} 300w, ${image4} 768w,`} 
            alt=""
          />
          <img
            src={image5low}
            srcSet={`${image5low} 300w, ${image5} 768w,`} 
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Marquee;
