import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>
        <NavLink to="/">Main</NavLink>
      </p>
      <p>
        {" "}
        <NavLink to="/residential">Residenital</NavLink>{" "}
      </p>
      <p>
        <NavLink to="/commercial">Commercial</NavLink>
      </p>
      <p>
        <NavLink to="/art">Art</NavLink>
      </p>
      <p>
        <NavLink to="/about">About</NavLink>
      </p>
      <p>
        {" "}
        <NavLink to="/contact">Contact</NavLink>
      </p>
    </>
  );
};

export default Menu;
