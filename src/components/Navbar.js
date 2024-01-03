import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
import logo from '../utils/Ekklêsia-web-2.webp'
import React from "react";
// import logo from '../logo-png-mini2.webp'

import "./navbar.scss";
import { Squash as Hamburger } from "hamburger-react";
// import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          {/* <div className="logo"> */}
          {/* <Brand /> */}
          <img src={logo} className='logo-1' alt="logo" />
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
                <NavLink to="/" onClick={handleShowNavbar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission" onClick={handleShowNavbar}>
                  Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/methodologie" onClick={handleShowNavbar}>
                  Methodologie
                </NavLink>
              </li>

              {/* <div className="dropdown"> */}
              <li className="drop" onClick={handleOpen}>
              <div className="drop-icon">Prestations
              <i className="fas fa-chevron-down"></i></div>

                {open ? (
                  <ul className="menu">
                    <li className="menu-item">
                      <NavLink to="/contact" onClick={handleShowNavbar}>
                        Contact
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/contact" onClick={handleShowNavbar}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                ) : null}
                {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
              </li>
              <li>
                <NavLink to="/contact" onClick={handleShowNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      <div className="title-container">
        <h1>Ekklesia Web, dynamiser votre vie d'église</h1>
      </div>
    </header>
  );
};

export default Navbar;
