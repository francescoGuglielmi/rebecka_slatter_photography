import style from './Footer.module.css';
import React, { useEffect } from 'react';

const Footer = ({ theme }) => {

  const profile = theme === 'light' ? 
  ` ${style['light']}` :
  ` ${style['dark']}`;

  console.log(window.location.pathname);

  const animation = window.location.pathname.includes('about') ? ` ${style['animate']}` : '';

  return (
    <footer className={profile + animation}>
      <i className="fa-brands fa-instagram fa-2xl"></i>
      <i className="fa-brands fa-linkedin-in fa-2xl"></i>
      <i className="fa-regular fa-envelope fa-2xl"></i>
    </footer>
  )
}

export default Footer;