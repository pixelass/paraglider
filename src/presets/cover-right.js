/**
 * A covering slider.
 * The previous or next slide cover the current slide from right.
 *
 * Includes pagers and navigation buttons.
 *
 * @file presets/cover-right.js
 * @module presets
 * @author Gregor Adams <greg@pixelass.com>
 */

import wrapper from './wrapper'

/**
 * Cover right animation slider
 *
 * This is a slider that moves the next or previous over the current slide.
 * The movement is linear.
 * Sides always cover from right.
 *
 * @param {Element} glider
 * @param {pluginOptions} opts
 * @returns {function} returns the destroy method
 */
const coverRight = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
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
    slides[previous].style.transform = 'translate(-100%,0,0)'
    slides[next].style.transform = 'translate(100%,0,0)'
    if (typeof opts.onEnd === 'function') {
      opts.onEnd({next, previous, current, rest}, slides)
    }
  }
})

export default coverRight
