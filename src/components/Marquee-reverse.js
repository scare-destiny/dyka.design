import image6 from "../assets/gallery-6.webp";
import image7 from "../assets/gallery-7.webp";
import image8 from "../assets/gallery-8.webp";
import image9 from "../assets/gallery-9.webp";
import image10 from "../assets/gallery-10.webp";
import image6low from "../assets/lowres/gallery-6-lowres.webp";
import image7low from "../assets/lowres/gallery-7-lowres.webp";
import image8low from "../assets/lowres/gallery-8-lowres.webp";
import image9low from "../assets/lowres/gallery-9-lowres.webp";
import image10low from "../assets/lowres/gallery-10-lowres.webp";

const MarqueeReversed = () => {
  return (
    <>
      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <img
             src={image6low}
             srcSet={`${image6} 1800w, ${image6low} 1200w`} 
            alt="logo"
          />
          <img
              src={image7low}
              srcSet={`${image7} 1800w, ${image7low} 900w`} 
            alt="logo"
          />
          <img
              src={image8low}
              srcSet={`${image8} 1800w, ${image8low} 1200w`} 
            alt="logo"
          />
          <img
             src={image9low}
             srcSet={`${image9} 1800w, ${image9low} 1200w`} 
            alt="logo"
          />
          <img
              src={image10low}
              srcSet={`${image10} 1800w, ${image10low} 1200w`} 
            alt="logo"
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
              src={image6low}
              srcSet={`${image6} 1800w, ${image6low} 1200w`} 
            alt="logo"
          />
          <img
              src={image7low}
              srcSet={`${image7} 1800w, ${image7low} 1200w`} 
            alt="logo"
          />
          <img
             src={image8low}
             srcSet={`${image8} 1800w, ${image8low} 1200w`} 
           alt="logo"
          />
          <img
              src={image9low}
              srcSet={`${image9} 1800w, ${image9low} 1200w`} 
            alt="logo"
          />
          <img
              src={image10low}
              srcSet={`${image10} 1800w, ${image10low} 1200w`} 
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default MarqueeReversed;
