import React from "react";
import style from "./HeadshotsAbout.module.css"

const HeadshotsAbout = () => {
  document.querySelector("html").style.setProperty("background-color", "rgb(0, 0, 0)");

  return (
    <div className={style["info-page-container"]}>
      <img src="background7.jpg" className={style['background-image']}/>
      <div className={style["info-container"]}>
        {/* <h1 className={style["info-title"]}>1,2, 3, Ready, SHOOT!</h1> */}
        <div className={style["info-image-container"]}>
          <img src="/rebecka.jpg" alt="Photographer" />
        </div>
        <div className={style["info"]}>
          <div className={style["info-sub-title"]}>
            <h2>Rebecka Slatter</h2>
          </div>
          <p>Hi there!</p> 
          <p>I bring years of expertise to every shoot, ensuring that your headshots are stunning, authentic and professional. I work with established actors, performers and artists and I am looking forward to working with you too!</p>  
          <p>Thank you for trusting me and my creative vision to capture your most intimate self.</p>
          <div className={style["typewriter-text"]}>
            <p style={{ animationDelay: "2s" }}>Don't be shy, get in touch and book a session with me.</p>
          </div>
          <div className={`${style["typewriter-text"]} ${style["rebecka-text"]}`} id="signature">
            <p style={{ animationDelay: "4.3s", fontFamily: "Just Me Again Down Here", fontSize: "3rem", fontWeight: "400" }}>Rebecka x</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HeadshotsAbout;
