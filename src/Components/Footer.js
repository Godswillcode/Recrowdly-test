import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

const Footer = () => {
  return (
    <footer className="myContainer mt-20 py-10">
      <div className="bg-gray-300" style={{ height: 2 }} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 text-center text-sm lg:text-base">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="logo" />{" "}
          <h2 className="font-semibold pl-3 text-lg">Recrowdly</h2>
        </Link>

        <div className="flex justify-between">
          <Link to="#!">Portfolio</Link>
          <Link to="#!">Pricing</Link>
          <Link to="#!">Process</Link>
          <Link to="#!">FAQs</Link>
        </div>
        <div>
          <p>
            A Punch Group company{" "}
            <span className="font-semibold pl-1">Punch</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
