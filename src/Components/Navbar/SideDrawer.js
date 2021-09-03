import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="#!">Services</NavLink>
        </li>
        <li>
          <NavLink to="#!">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="#!">
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
