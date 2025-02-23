import React from "react";
import DarkNavbar from "./dark-navbar/DarkNavbar.jsx";
import LightNavbar from "./light-navbar/LightNavbar.jsx";

const Navbar = ({theme, showMenu, setShowMenu}) => {
  if (theme === 'dark') {
    return <DarkNavbar showMenu={showMenu} setShowMenu={setShowMenu}/>
  } else {
    return <LightNavbar showMenu={showMenu} setShowMenu={setShowMenu}/>
  }
}

export default Navbar;