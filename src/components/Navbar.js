import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
import logo from "../utils/Ekklêsia-web-2.webp";
import React from "react";
import { useEffect } from "react";
// import logo from '../logo-png-mini2.webp'

import "./navbar.scss";
import { Squash as Hamburger } from "hamburger-react";
// import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    // début modif scroll
    // window.scrollTo(0,0)
    //fin modif scroll

    setShowNavbar(!showNavbar);
  };
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  const closeAndTop = () => {
    window.scrollTo(0, 0);
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          {/* <div className="logo"> */}
          {/* <Brand /> */}
          <img src={logo} className="logo-1" alt="logo" />
          {/* <div className="brand">METEOBEN</div> */}
          {/* </div> */}
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <Hamburger /> */}
            <span className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeAndTop}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission" onClick={closeAndTop}>
                  Notre Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/methodologie" onClick={closeAndTop}>
                  Notre Methodologie
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeAndTop}>
                  Nos Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/realisations" onClick={closeAndTop}>
                  Nos Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeAndTop}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="title-container">
        <h1>Ekklêsia Web, dynamisez votre vie d'église avec le Net !</h1>
      </div>
    </header>
  );
};

export default Navbar;
