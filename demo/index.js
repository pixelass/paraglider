/* global document */
import {easeOutSine} from 'easing-utils'
import wrapper from '../src/presets/wrapper'

import './main.css' // eslint-disable-line import/no-unassigned-import
import styles from './index.css'

const classNames = {
  pluginLoaded: styles.pluginLoaded,
  current: styles.current,
  previous: styles.previous,
  next: styles.next,
  init: styles.init,
  active: styles.active,
  slides: styles.jsWrapper,
  slide: styles.jsSlide,
  dot: styles.jsDot,
  prevButton: styles.jsPrev,
  nextButton: styles.jsNext
}

const parallaxSlider = glider => {
  const slideSlices = Array.from(document.querySelectorAll(`.${styles.slide}`))
    .map(slide => Array.from(slide.querySelectorAll(`.${styles.cube}`)))

  return wrapper(glider, {
    classNames,
    onSlide(progress, {next, previous, current, rest}, slides) {
      rest.forEach(slideIndex => {
        slides[slideIndex].style.transform = ''
      })
      if (previous !== null) {
        slides[previous].style.transform = 'translate3d(0,0,0)'
        slideSlices[previous].forEach((slice, index) => {
          const pow = ((slideSlices[previous].length - index - 1) % 6) + 1
          const value = Math.pow(1 - progress, pow)
          slice.style.transformOrigin = '0 100%'
          slice.style.transform = `rotate3d(0,1,0,${-180 * easeOutSine(value)}deg)`
        })
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(0,0,0)'
        slideSlices[next].forEach((slice, index) => {
          const pow = (index % 6) + 1
          const value = Math.pow(1 - progress, pow)
          slice.style.transformOrigin = '100% 100%'
          slice.style.transform = `rotate3d(0,1,0,${-180 * easeOutSine(value)}deg)`
        })
      }
    },
    onEnd({current}, slides) {
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      slideSlices[current].forEach(slice => {
        slice.style.transform = ''
      })
    }
  })
}

const sliders = Array.from(document.querySelectorAll(`.${styles.parallax}`))

sliders.forEach(slider => {
  parallaxSlider(slider)
})

