/**
 * Wraps Paraglider to apply pagers and navigation buttons.
 * This wrapper simplifies the usage of Paraglider by offering some basic
 * functionality.
 *
 * @file presets/wrapper.js
 * @module  presets
 * @author Gregor Adams <greg@pixelass.com>
 */

import Glider from '../glider'
import {PRESET_DEFAULTS, PLUGIN_DEFAULTS} from '../config'
import {
  findAll as $,
  findFirst as $$
} from '../helpers'

/**
 * Simple wrapper including pagers and navigation arrows.
 *
 * Use this helper to create custom sliders with pager dots and arrows, to
 * navigate to diferent slides.
 * The options are extended by additional class names.
 * @param {Element} glider
 * @param {pluginOptions} opts
 * @returns {function} returns the destroy method
 */
const wrapper = (glider, opts) => {
  if (!glider) {
    return
  }
  const pagers = $(`.${opts.classNames.dot}`, glider)
  const nextButton = $$(`.${opts.classNames.nextButton}`, glider)
  const prevButton = $$(`.${opts.classNames.prevButton}`, glider)
  const options = {
    ...PLUGIN_DEFAULTS,
    ...PRESET_DEFAULTS,
    ...opts,
    onSlide(progress, {next, previous, current, rest}, slides) {
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, {next, previous, current, rest}, slides)
      }
    },
    onEnd({next, previous, current, rest}, slides) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(opts.classNames.active, i === current)
      })
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({next, previous, current, rest}, slides)
      }
    }
  }
  const instance = new Glider(options)
  instance.init(glider)
  pagers.forEach((pager, i) => {
    const goto = e => {
      e.preventDefault()
      return instance.goTo(i)
    }
    pager.addEventListener('click', goto)
    pager.classList.toggle(options.classNames.active, i === options.initialSlide)
  })
  if (nextButton) {
    nextButton.addEventListener('click', instance.nextSlide)
  }
  if (prevButton) {
    prevButton.addEventListener('click', instance.prevSlide)
  }
  return instance.destroy
}

export default wrapper
