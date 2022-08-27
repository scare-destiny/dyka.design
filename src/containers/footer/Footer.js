import React from "react";
import { BsBehance, BsInstagram} from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="dyka__footer">
      <a href="https://www.behance.net/anastasiyacb27" rel="noreferrer" target="_blank">
        <BsBehance color="#222" size={18} />
      </a>
      <a href="https://www.instagram.com/dyka_design/" rel="noreferrer" target="_blank">
        <BsInstagram color="#222" size={18} />
      </a>
    </div>
  );
};

export default Footer;
