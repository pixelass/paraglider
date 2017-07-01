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
 * @param {PRESET_DEFAULTS} opts
 * @returns {function} returns the destroy method
 */
const belt = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous === null && next === null) {
      const percent = current > 0 ? -100 : 100
      slides[current].style.transform = `translate3d(${(progress * percent)}%,0,0)`
    } else if (previous !== null) {
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
    [next, previous, ...rest].forEach(id => {
      slides[id].style.transform = ''
    })
    slides[current].style.transform = ''
    if (typeof opts.onEnd === 'function') {
      opts.onEnd({next, previous, current, rest}, slides)
    }
  }
})

export default belt
