import React from "react";
import { BsBehance, BsInstagram } from "react-icons/bs";
import Menu from "../../components/menu";
import "./footer.css";

const Footer = ({header, cta}) => {
  return (
    <div className="dyka__footer section__padding">
      <div className="dyka__footer-heading">
        <h1 className="footer__text">
          {header}
        </h1>
      </div>
      <div className="dyka__footer-btn">
        <p>{cta}</p>
      </div>

      <div className="dyka__footer-links">
        <div className="dyka__footer-links_div">
          <Menu/>
          {/* <p>Main</p>
          <p>Residential</p>
          <p>Commercial</p>
          <p>Art</p>
          <p>About</p>
          <p>Contact</p> */}
        </div>
      </div>
      <div className="dyka__footer-copyright">
        <p>© 2022 Dyka Design. All rights reserved.</p>
      </div>
      <div className="dyka__footer-links-social">
        <a
          href="https://www.behance.net/anastasiyacb27"
          rel="noreferrer"
          target="_blank"
        >
          <BsBehance color="#222" size={18} />
        </a>
        <a
          href="https://www.instagram.com/dyka_design/"
          rel="noreferrer"
          target="_blank"
        >
          <BsInstagram color="#222" size={18} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
