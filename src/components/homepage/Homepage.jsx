import style from './Homepage.module.css'
import React from 'react'

const Homepage = () => {
  document.querySelector('html').style.setProperty("background-color", "white");

  return (
    <div className={style["main-container"]}>
      <div className={style["image-loop"]}>
        <img src="homepage-images/Junior-1.jpg" alt="Fashion photography"/>
        <img src="homepage-images/Percelle-1.jpg" alt="Percelle Ascott"/>
        <img src="homepage-images/Sanchez-1.jpg" alt="Stephen Sanchez"/>
        <img src="homepage-images/Axel-1.jpg" alt="Luxury fashion"/>
        <img src="homepage-images/Luther-1.jpg" alt="Luther Ford"/>
        <img src="homepage-images/Markus-1.jpg" alt="International"/>
        <img src="homepage-images/Lydia-1.jpg" alt="London"/>
      </div>
    </div>
  )
}

export default Homepage