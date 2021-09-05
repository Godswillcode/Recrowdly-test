import React from "react";
import "./navbar.css";
import logo from "../../Images/logo.svg";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar bg-white shadow-sm px-6 lg:px-16">
      <div className="flex">
        <a href="/#home" className="navbar_logo flex items-center">
          <img src={logo} alt="logo" />{" "}
          <h2 className="font-semibold lg:pl-3 text-lg lg:flex hidden">
            Recrowdly
          </h2>
        </a>

        <ul className="navLink_wrap">
          <li>
            <a href="/#home" className="nav_link">
              Home
            </a>
          </li>
          <li>
            <a href="/#services" className="nav_link">
              Services
            </a>
          </li>
          <li>
            <a href="/#pricing" className="nav_link">
              Pricing
            </a>
          </li>
          <li>
            <a href="/#portfolio" className="nav_link">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
      <div className="flex">
      <button className="bg-black text-white px-4 py-1 text-sm hover:bg-blue-700 transition ease-in-out duration-500">
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
