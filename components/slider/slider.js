import React, { Fragment, useState } from 'react'
import classes from './slider.module.css'
import Image from 'next/image'
import leftArrow from '../../public/icons/left-arrow.png'
import rightArrow from '../../public/icons/right-arrow.png'
import closeIcon from '../../public/icons/close-popup.png'
import spinner from '../../public/icons/spinner.svg'

const ImageSlider = ({ slides, togglePopUp }) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className={`popUp ${classes.slider}`}>
      <div className="loading">
        <Image src={spinner} alt="loading" />
      </div>
      <div className="closeIcon" onClick={togglePopUp}>
        <Image src={closeIcon} alt="close" />
      </div>
      {slides.length > 1 && (
        <Fragment>
          <div className="leftArrow">
            <Image src={leftArrow} alt="left-arrow" onClick={prevSlide} />
          </div>
          <div className="rightArrow">
            <Image src={rightArrow} alt="right-arrow" onClick={nextSlide} />
          </div>
        </Fragment>
      )}
      {slides.map((slide, index) => (
        <div
          className={
            index === current
              ? `${classes.image} ${classes.slide} ${classes.active}`
              : classes.slide
          }
          key={index}
        >
          {index === current && (
            <Image
              src={slide}
              alt="gallery pic"
              objectFit="contain"
              layout="fill"
            />
          )}
        </div>
      ))}
    </section>
  )
}

export default ImageSlider
