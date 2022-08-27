import image6 from '../assets/gallery-6.jpg'
import image7 from '../assets/gallery-7.jpg'
import image8 from '../assets/gallery-8.jpg'
import image9 from '../assets/gallery-9.jpg'
import image10 from '../assets/gallery-10.jpg'

const MarqueeReversed = () => {
  return (
   <>
      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <img
            src={image6}
            alt="logo"
          />
          <img
            src={image7}
            alt="logo"
          />
          <img
            src={image8}
            alt="logo"
          />
          <img
            src={image9}
            alt="logo"
					/>
					 <img
            src={image10}
            alt="logo"
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
				<img
            src={image6}
            alt="logo"
          />
          <img
            src={image7}
            alt="logo"
          />
          <img
            src={image8}
            alt="logo"
          />
          <img
            src={image9}
            alt="logo"
					/>
					 <img
            src={image10}
            alt="logo"
          />
        </div>
      </div>
			</>
  );
};

export default MarqueeReversed;
