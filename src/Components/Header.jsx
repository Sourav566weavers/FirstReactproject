import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from "../assets/react.svg";

const Header = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    console.log("Nav opened");
  };
  
  const closeNav = () => {
    setIsOpen(false);
    console.log("Nav closed");
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-wrapper">
         {/* Logo */}
         <div className="header-logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Hamburger Menu - Visible only on mobile */}
          <span className="hamburger-icon" onClick={openNav}>
            <i className="fas fa-bars"></i>
          </span>

          {/* Side Navigation */}
          <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
            <span className="closebtn" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </span>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={closeNav}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu for Desktop */}
          <nav className="desktop-menu">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
