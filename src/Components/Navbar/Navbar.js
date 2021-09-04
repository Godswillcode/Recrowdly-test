import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../Images/logo.svg";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar bg-white shadow-sm px-6 lg:px-16">
      <div className="flex">
        <NavLink to="/" className="navbar_logo flex items-center">
          <img src={logo} alt="logo" />{" "}
          <h2 className="font-semibold lg:pl-3 text-lg lg:flex hidden">
            Recrowdly
          </h2>
        </NavLink>

        <ul className="navLink_wrap">
          <li>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#!" className="nav_link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="#!" className="nav_link">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="#!" className="nav_link">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
      <button className="bg-black text-white px-4 py-1 text-sm">
        Schedule A Call
      </button>

      <div className="hamburger_menu ml-3" onClick={click}>
        <i className="fas fa-bars text-2xl"></i>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
