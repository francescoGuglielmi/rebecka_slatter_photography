import style from './DarkNavbar.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const DarkNavbar = ({showMenu, setShowMenu}) => {
  return (
    <>
      <nav className={`${style["nav-container"]} ${showMenu && style['show-menu']}`}>
        <Link to="/headshots">
          <img className={style["nav-logo"]} src="logos/rebecka_logo_white.png" alt="rebecka slatter logo" />
        </Link>
        <h1 className={style["navbar-title"]}>HEADSHOTS</h1>
          <div className={`${style['mobile-menu']} ${showMenu && style['show-menu']}`} >
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
      <a className={style["navigation-link"]} href="/pricing">
        PACKAGES
      </a>
      <a className={style["navigation-link"]} href="/headshot-about">
        ABOUT
      </a>
      {/* <a className={style["navigation-link"]} href="/headshot-contacts">
        CONTACT
      </a> */}
    </div>
  )
}

export default DarkNavbar;

