import React from 'react';
import style from './DarkContacts.module.css'

const DarkContacts = () => {

  return (
    <>
      <img src="background7.jpg" className={style['background-image']}/>
      <div className={style["flex-container"]}>
        <a className={style["instagram"]} href="https://www.instagram.com/rebeckaslatter/?hl=en"><img className={style["logo"]} src="logos/instagram_icon_white.png" alt="instagram logo" /></a>
        <a className={style["linkedin"]}href="https://www.linkedin.com/in/rebecka-slatter-b28103136/"><img className={style["logo"]} src="logos/linkedin_icon_white.png" alt="linkedin logo" /></a>
        <a className={style["email"]}href={`mailto:${"rebecka@rebeckaslatter.com"}`}><img className={style["logo"]} src="logos/email-icon-white-1.png" alt="email logo" /></a>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default DarkContacts;