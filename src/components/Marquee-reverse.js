import image6 from '../assets/gallery-6.jpg'
import image7 from '../assets/gallery-7.jpg'
import image8 from '../assets/gallery-8.jpg'
import image9 from '../assets/gallery-9.jpg'
import image10 from '../assets/gallery-10.jpg'
import image6low from '../assets/lowres/gallery-6-lowres.jpg';
import image7low from '../assets/lowres/gallery-7-lowres.jpg';
import image8low from '../assets/lowres/gallery-8-lowres.jpg';
import image9low from '../assets/lowres/gallery-9-lowres.jpg';
import image10low from '../assets/lowres/gallery-10-lowres.jpg';

const MarqueeReversed = () => {
  return (
   <>
      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <img
            src={image6low}
            srcSet={image6}
            alt="logo"
          />
          <img
            src={image7low}
            srcSet={image7}
            alt="logo"
          />
          <img
            src={image8low}
            srcSet={image8}
            alt="logo"
          />
          <img
            src={image9low}
            srcSet={image9}
            alt="logo"
					/>
          <img
            src={image10low}
            srcSet={image10}
            alt="logo"
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
            src={image6low}
            srcSet={image6}
            alt="logo"
          />
          <img
            src={image7low}
            srcSet={image7}
            alt="logo"
          />
          <img
            src={image8low}
            srcSet={image8}
            alt="logo"
          />
          <img
            src={image9low}
            srcSet={image9}
            alt="logo"
					/>
          <img
            src={image10low}
            srcSet={image10}
            alt="logo"
          />
        </div>
      </div>
			</>
  );
};

export default MarqueeReversed;
