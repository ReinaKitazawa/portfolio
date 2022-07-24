import React, { useState } from "react";
import "./Navbar.css";
import { Link as Scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "./smiley.png";

const Navbar = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  const [hamburger, setHamburger] = useState(false);
  const navToggle = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="nav">
      <img src={Icon} alt="icon" onClick={refreshPage}></img>
      <ul className="items" style={{ display: hamburger ? "flex" : null }}>
        <li className="item">
          <Scroll to="projects" smooth={true} onClick={navToggle}>
            PROJECTS
          </Scroll>
        </li>
        <li className="item">
          <Scroll to="skills" smooth={true} onClick={navToggle}>
            SKILLS
          </Scroll>
        </li>
        <li className="item">
          <Scroll to="contact" smooth={true} onClick={navToggle}>
            CONTACT
          </Scroll>
        </li>
      </ul>
      <p className="hamburger" onClick={navToggle}>
        {hamburger ? <CloseIcon /> : <MenuIcon />}
      </p>
    </nav>
  );
};
export default Navbar;
