import React from "react";
import Welcome from "../../components/welcome/Welcome";
import "./about.css";

const About = () => {
  return (
    <div className="dyka__about">
      <div className="dyka__about-text_container section__padding">
        <p>
          Hi, my name is Anastasiia, and welcome to my website! My passion for
          design and understanding clients' needs is what I have lived and
          breathed the last decade. For me, talent results from discipline, so I
          push myself every day to improve.
        </p>
        <p>
          My career started at a design bureau while I studied at Berlin
          International University. Over the years, I've successfully finished
          dozens of projects and received positive feedback.
        </p>
        <p>
          Every interior should tell your authentic story. It should express
          where you've been, where you are, and where you're going. I take pride
          in helping my clients live life more beautifully and turn their ideas
          into reality.
        </p>
      </div>
    </div>
  );
};

export default About;
