import React from "react";
import Marquee from "../../components/Marquee/Marquee";
import MarqueeReversed from "../../components/Marquee/Marquee-reverse";
import "./gallery.css";

const Gallery = () => {
  return (
		<div className="container-marquee">
      <Marquee />
      <MarqueeReversed />
    </div>
  );
};

export default Gallery;
