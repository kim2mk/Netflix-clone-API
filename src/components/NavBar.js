import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../assets/Netflix-logo.png";
import logo2 from "../assets/Netflix-avatar.png";

const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav-logo" src={logo} alt="logo" />
      <img className="nav-avatar" src={logo2} alt="avatar" />
    </div>
  );
};

export default NavBar;
