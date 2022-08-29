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
            src={image1}
            srcSet={`${image1low} 480W, ${image1} 1000w`}
            alt=""
          />
          <img
            src={image2}
            srcSet={`${image2low} 480W, ${image2} 1000w`}
            alt=""
          />
          <img
            src={image3}
            srcSet={`${image3low} 480W, ${image3} 1000w`}
            alt=""
          />
          <img
            src={image4}
            srcSet={`${image4low} 480W, ${image4} 1000w`}
            alt=""
          />
          <img
            src={image5}
            srcSet={`${image5low} 480W, ${image5} 1000w`}
            alt=""
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
            src={image1}
            srcSet={`${image1low} 480W, ${image1} 1000w`}
            alt=""
          />
          <img
            src={image2}
            srcSet={`${image2low} 480W, ${image2} 1000w`}
            alt=""
          />
          <img
            src={image3}
            srcSet={`${image3low} 480W, ${image3} 1000w`}
            alt=""
          />
          <img
            src={image4}
            srcSet={`${image4low} 480W, ${image4} 1000w`}
            alt=""
          />
          <img
            src={image5}
            srcSet={`${image5low} 480W, ${image5} 1000w`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Marquee;
