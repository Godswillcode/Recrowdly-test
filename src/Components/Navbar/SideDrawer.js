import React from "react";
// import { NavLink } from "react-router-dom";
import "./SideDrawer.css";
import logo from "../../Images/logo.svg";

function SideDrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedraw_links" onClick={click}>
        <li>
          <a href="/#home">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#pricing">Pricing</a>
        </li>
        <li>
          <a href="/#portfolio">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
