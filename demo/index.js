/* global document */
import {easeOutSine, linear} from 'easing-utils'
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

const parallaxSlider = (glider, handlePrev, handleNext) => {
  const slideSlices = Array.from(glider.querySelectorAll(`.${styles.slide}`))
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
          handlePrev({
            progress,
            slice,
            index,
            slides: slides[previous],
            slicesLength: slideSlices[previous].length
          })
        })
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(0,0,0)'
        slideSlices[next].forEach((slice, index) => {
          handleNext({
            progress,
            slice,
            index,
            slides: slides[next],
            slicesLength: slideSlices[next].length
          })
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
const exampleData = [
  {
    x: 0,
    y: 1,
    easing: easeOutSine,
    powPrevious(index, slicesLength) {
      return ((slicesLength - index - 1) % 6) + 1
    },
    powNext(index) {
      return (index % 6) + 1
    }
  },
  {
    x: 1,
    y: 0,
    easing: linear,
    powPrevious(index, slicesLength) {
      return ~~((slicesLength - index - 1) / 6) + 1
    },
    powNext(index) {
      return ~~(index / 6) + 1
    }
  },
  {
    x: 1,
    y: 0,
    easing: linear,
    powPrevious(index, slicesLength) {
      return ((slicesLength - index - 1) % 7) + 1
    },
    powNext(index) {
      return (index % 7) + 1
    }
  }
]

sliders.forEach((slider, sliderIndex) => {
  parallaxSlider(slider,
    ({progress, slice, index, slicesLength}) => {
      const {x, y, powPrevious, easing} = exampleData[sliderIndex]
      const pow = powPrevious(index, slicesLength)
      const value = Math.pow(1 - progress, pow)
      slice.style.transformOrigin = '0 0'
      slice.style.transform = `rotate3d(${x},${y},0,${-180 * easing(value)}deg)`
    },
    ({progress, slice, index, slicesLength}) => {
      const {x, y, powNext, easing} = exampleData[sliderIndex]
      const pow = powNext(index, slicesLength)
      const value = Math.pow(1 - progress, pow)
      slice.style.transformOrigin = '100% 100%'
      slice.style.transform = `rotate3d(${x},${y},0,${-180 * easing(value)}deg)`
    }
  )
})

