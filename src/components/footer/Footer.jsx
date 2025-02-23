import style from './Footer.module.css';
import React, { useEffect } from 'react';

const Footer = ({ theme }) => {

  const profile = theme === 'light' ? 
  ` ${style['light']}` :
  ` ${style['dark']}`;

  const animation = window.location.pathname.includes('about') ? ` ${style['animate']}` : '';

  return (
    <footer className={profile + animation}>
      <a href="https://www.instagram.com/rebeckaslatter/?hl=en" target='_blank'>
        <i className="fa-brands fa-instagram fa-2xl"></i>
      </a>
      <a href="https://www.linkedin.com/in/rebecka-slatter-b28103136/" target='_blank'>
        <i className="fa-brands fa-linkedin-in fa-2xl"></i>
      </a>
      <a href={`mailto:${"rebecka@rebeckaslatter.com"}`} >
        <i className="fa-regular fa-envelope fa-2xl"></i>
      </a>
    </footer>
  )
}

export default Footer;