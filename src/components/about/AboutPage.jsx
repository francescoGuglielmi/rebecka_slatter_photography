import React from 'react';
import style from './AboutPage.module.css';

const AboutPage = ({setShowMenu}) => {
  document.querySelector('html').style.setProperty("background-color", "white");

  return (
    <div className={style["about-page-main-container"]}>
      <div className={style["shift-text-up"]} style={{ animationDelay: "0s" }}>
        <p>Hey there,</p>
      </div>
      <div className={`${style["about-text-container"]} ${style["shift-text-up"]}`} style={{ animationDelay: "0.8s" }} data-testid="text-container">
        <div><p>I am a London-based photographer and artist.</p></div>
        <div><p>Growing up in the tranquil landscapes of Scandinavia gave me a taste for adventures and it led me to pursue Fashion Photography in London.</p></div>
        <div><p>I thrive on big, fast-paced shoots with eclectic creative teams as much as I value the more intimate experience with just me and my subject.</p></div>
        <div><p>Trust is key, and I strive to honor it by capturing raw authenticity in every frame.</p></div>
      </div>
      <div className={style["typewriter-text"]}>
        <p style={{ animationDelay: "2s" }}>Don't hesitate to get in touch and connect with me.</p>
      </div>
      <div className={`${style["typewriter-text"]} ${style["rebecka-text"]}`} id="signature">
        <p style={{ animationDelay: "4.3s", fontFamily: "Just Me Again Down Here", fontSize: "3rem", fontWeight: "400" }}>Rebecka x</p>
      </div>
      <br />
    </div>
  );
}

export default AboutPage;
