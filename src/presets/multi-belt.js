/**
 * A simple belt slider as we all know it.
 * The previous, current and next slide move from left to right
 * or the other way around at the same time.
 *
 * Includes navigation buttons.
 * Allows using `visibleSlides` & `slideBy`
 *
 * @file presets/belt.js
 * @module presets
 * @author Gregor Adams <greg@pixelass.com>
 */

import multiWrapper from './multi-wrapper'

/**
 * Belt animation slider.
 *
 * This is a default slider that moves the current and next or previous slide at
 * the same time. The movement is linear.
 *
 * @param {Element} glider
 * @param {pluginOptions} opts
 * @returns {function} returns the destroy method
 */
const multiBelt = (glider, opts) => multiWrapper(glider, {
  ...opts,
  onInit({next, previous, current, rest}, slides) {
    current.forEach((id, index) => {
      slides[id].style.transform = `translate3d(${index * 100}%,0,0)`
    })
  },
  onSlide(progress, {next, previous, current, rest}, slides, {slideBy}) {
    if (previous !== null) {
      if (current.length > 0) {
        current.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(index * 100) + (progress * 100)}%,0,0)`
        })
      } else {
        slides[current].style.transform = `translate3d(${progress * 100}%,0,0)`
      }
      if (previous.length > 0) {
        previous.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${((slideBy - 1) * -100) + (index * 100) + (progress * 100) - 100}%,0,0)`
        })
      } else {
        slides[previous].style.transform = `translate3d(${(progress * 100) - 100}%,0,0)`
      }
    } else if (next !== null) {
      if (current.length > 0) {
        current.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(index * 100) - (progress * 100)}%,0,0)`
        })
      } else {
        slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
      }
      if (next.length > 0) {
        next.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(slideBy * 100) + (index * 100) - (progress * 100)}%,0,0)`
        })
      } else {
        slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      }
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

export default multiBelt
