import style from './Headshots.module.css';
import React, { useEffect, useState } from 'react'

const Headshots = ({showMenu}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState(null);
  const [visible, setVisible] = useState('visible');

  const imageFiles = [
    "Philip-1.jpg",
    "Alice-1.jpg",
    "Alice-2.jpg",
    "Connor-1.jpg",

    "Sophie-3.jpg",
    "Jonathan-1.jpg",
    "Leanne-1.jpg",
    "Michel-1.jpg",

    "Kat-1.jpg",
    "Michelle-1.jpg",
    "Patrick-1.jpg",
    "Sebastian-1.jpg",

    "Sophie-2.jpg",
    "Ali-1.jpg",
    "Trevor-1.jpg",
    "Benson-1.jpg"
  ]

  function handleImageClick(index, number) {
    setIsModalOpen(!isModalOpen);
    setImageToDisplay(index + number);
  }

  function handleArrowBackClick(event) {
    event.stopPropagation()
    if (imageToDisplay <= 0) {
      setVisible("")
      setTimeout(() => {
        setImageToDisplay(imageFiles.length - 1)
        setVisible("visible")
      }, 400);
      return
    }
    setVisible("")
    setTimeout(() => {
      setImageToDisplay(imageToDisplay - 1)
      setVisible("visible")
    }, 400);
  }

  function handleArrowForwardClick(event) {
    event.stopPropagation()
    if (imageToDisplay >= imageFiles.length - 1) {
      setVisible("")
      setTimeout(() => {
        setVisible("visible")
        setImageToDisplay(0)
      }, 400);
      return
    }
    setVisible("")
    setTimeout(() => {
      setVisible("visible")
      setImageToDisplay(imageToDisplay + 1)
    }, 400);
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowLeft':
        event.stopPropagation()
        handleArrowBackClick(event);
        break;
      case 'ArrowRight':
        event.stopPropagation()
        handleArrowForwardClick(event);
        break;
      case 'Escape':
        setIsModalOpen(!isModalOpen)
      default:
        break;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.querySelector("nav").style.setProperty("z-index", "-1");
    } else {
      document.querySelector("nav").style.setProperty("z-index", "999");
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, imageToDisplay]);

  return (
    <div className={style["page-container"]}>
      <img src="background7.jpg" className={style['background-image']}/>
      <h1 className={style["headshots-title"]}>HEADSHOTS</h1>
      <div className={`${style["masonry-container"]} ${showMenu? style["show-menu"] : ""}`}>
        <div className={style["masonry-column"]}>
          {imageFiles.slice(0, 4).map((image, index) => (
            <img 
              className={style["masonry-image"]} 
              key={index}
              src={`headshots-images/${image}`} 
              onClick={() => handleImageClick(index, 0)}
            />
          ))}
        </div>
        <div className={style["masonry-column"]}>
          {imageFiles.slice(4, 8).map((image, index) => (
            <img 
              className={style["masonry-image"]} 
              key={index}
              src={`headshots-images/${image}`} 
              onClick={() => handleImageClick(index, 4)}
            />
          ))}
        </div>
        <div className={style["masonry-column"]}>
          {imageFiles.slice(8, 12).map((image, index) => (
            <img 
              className={style["masonry-image"]} 
              key={index}
              src={`headshots-images/${image}`} 
              onClick={() => handleImageClick(index, 8)}
            />
          ))}
        </div>
        <div className={style["masonry-column"]}>
          {imageFiles.slice(12, 16).map((image, index) => (
            <img 
              className={style["masonry-image"]} 
              key={index}
              src={`headshots-images/${image}`} 
              onClick={() => handleImageClick(index, 12)}
            />
          ))}
        </div>
        {isModalOpen &&
          <div 
            className={style['overlay']} 
            onClick={() => handleImageClick()}>
            <div className={style['work-page-carousel-container']}>
              <div className={style['carousel-image-container']}>
                <img 
                  id="carousel-image" 
                  className={style[visible]} 
                  src={`headshots-images/${imageFiles[imageToDisplay]}`} 
                  alt={imageFiles[imageToDisplay]}
                />
              </div>
              <button 
                className={style['arrow-back']} 
                onClick={(event) => handleArrowBackClick(event)}
              >
                <svg 
                  fill="#ffffff" 
                  height="25px" 
                  width="25px" 
                  version="1.1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 330 330"
                >
                  <path 
                    id="XMLID_222_" 
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
              </button>
              <button 
                className={style['arrow-forward']} 
                onClick={(event) => handleArrowForwardClick(event)}
              >
                <svg 
                  fill="#ffffff" 
                  height="25px" 
                  width="25px" 
                  version="1.1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 330 330"
                >
                  <path 
                    id="XMLID_222_" 
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Headshots;