import PropTypes from "prop-types";
import { useState } from "react";
// import BackToTop from "./BackToTop";
// import Footer from "./Footer";
import Backdrop from "./Navbar/Backdrop";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "./Navbar/SideDrawer";


const propTypes = {
  children: PropTypes.any.isRequired,
};
const Layout = ({ children }) => {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      {/* <BackToTop /> */}
      <main>{children}</main>
     
      {/* <Footer/> */}
      {/* <div className="mt-80"></div> */}
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
