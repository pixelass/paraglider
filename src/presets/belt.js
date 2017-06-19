/**
 * A simple belt slider as we all know it.
 * The previous, current and next slide move from left to right
 * or the other way around at the same time.
 *
 * Includes pagers and navigation buttons.
 *
 * @file presets/belt.js
 * @module presets
 * @author Gregor Adams <greg@pixelass.com>
 */

import wrapper from './wrapper'

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
const belt = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${-100 + (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * 100)}%,0,0)`
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
    }
    if (typeof opts.onSlide === 'function') {
      opts.onSlide(progress, {next, previous, current, rest}, slides)
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    rest.forEach(slide => {
      slides[slide].style.transform = ''
    })
    slides[current].style.transform = ''
    slides[previous].style.transform = 'translate3d(-100%,0,0)'
    slides[next].style.transform = 'translate3d(100%,0,0)'
    if (typeof opts.onEnd === 'function') {
      opts.onEnd({next, previous, current, rest}, slides)
    }
  }
})

export default belt
