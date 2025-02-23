import style from './LightNavbar.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const LightNavbar = ({showMenu, setShowMenu}) => {
  return (
    <>
      <nav className={`${style["nav-container"]} ${showMenu && style['show-menu']}`}>
        <Link to="/">
          <img className={style["nav-logo"]} src="logos/rebecka_logo.png" alt="Rebecka Slatter Photography" />
        </Link>
          <div className={`${style["mobile-menu"]} ${showMenu && style['show-menu']}`}>
            <div className={style["menu-icon"]} onClick={() => setShowMenu(!showMenu)}>
              <div className={style["bar"]}></div>
              <div className={style["bar"]}></div>
              <div className={style["bar"]}></div>
            </div>
            <NavigationLinks showMenu={showMenu}/>
          </div>
      </nav>
      <div className={`${style["width-section"]} ${showMenu && style['show-menu']}`}></div>
    </>
  );
}

const NavigationLinks = ({showMenu}) => {
  return (
    <div className={`${style["navigation-links"]} ${showMenu && style['show-menu']}`}>
      <Link className={style["navigation-link"]} to="/work">
        WORK
      </Link>
      <Link className={style["navigation-link"]} to="/about">
        ABOUT
      </Link>
      {/* <Link className={style["navigation-link"]} to="/contact">
        CONTACT
      </Link> */}
    </div>
  )
}

export default LightNavbar;

