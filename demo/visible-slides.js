import multiWrapper from '../src/presets/multi-wrapper'
import {multiBelt} from '../src/presets'
import {
  findFirst as $$
} from '../src/helpers'

import './main.css' // eslint-disable-line import/no-unassigned-import
import styles from './visible-slides.css'

const multiCover = (glider, opts) => multiWrapper(glider, {
  ...opts,
  onInit({next, previous, current, rest}, slides) {
    current.forEach((id, index) => {
      slides[id].style.transform = `translate3d(${index * 100}%,0,0)`
      slides[id].style.zIndex = 2
    })
  },
  onSlide(progress, {next, previous, current, rest}, slides, {slideBy}) {
    if (previous !== null) {
      current.forEach((id, index) => {
        slides[id].style.transform = `translate3d(${(index * 100) + (progress * 100)}%,0,0)`
        slides[id].style.zIndex = 2
      })
      if (previous.length > 0) {
        previous.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(index * 100)}%,0,0)`
          slides[id].style.zIndex = 1
        })
      } else {
        slides[previous].style.transform = `translate3d(0,0,0)`
        slides[previous].style.zIndex = 1
      }
    } else if (next !== null) {
      for (let i = 0; i < slideBy; i++) {
        slides[current[i]].style.zIndex = 1
      }
      current.filter((x, i) => i > (slideBy - 1)).forEach((id, index) => {
        slides[id].style.transform = `translate3d(${((index + slideBy) * 100) - (progress * 100)}%,0,0)`
        slides[id].style.zIndex = 2
      })
      next.forEach((id, index) => {
        slides[id].style.transform = `translate3d(${(slideBy * 100) + (index * 100) - (progress * 100)}%,0,0)`
        slides[id].style.zIndex = 3
      })
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    slides.forEach(slide => {
      slide.style.transform = ''
      slide.style.zIndex = ''
    })
    current.forEach((id, index) => {
      slides[id].style.transform = `translate3d(${index * 100}%,0,0)`
    })
  }
})

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

multiBelt($$(`.${styles.multi1}`), {classNames, visibleSlides: 2, slideBy: 1})
multiBelt($$(`.${styles.multi2}`), {classNames, visibleSlides: 4, slideBy: 4})
multiCover($$(`.${styles.multi3}`), {classNames, visibleSlides: 5, slideBy: 2})
multiCover($$(`.${styles.multi4}`), {classNames, visibleSlides: 3, slideBy: 3})
