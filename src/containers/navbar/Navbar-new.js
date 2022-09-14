import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Menu from "../../components/Menu/menu";
import logo from "../../assets/logo.jpg";
import "./navbar.css";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dyka__navbar">
      <div className="dyka__navbar-links">
        <div className="dyka__navbar-links_logo">
          <img src={logo} alt="Dyka Design Logo" />
        </div>
        <div className="dyka__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dyka__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dyka__navbar-menu_container scale-up-center">
            <div className="dyka__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
