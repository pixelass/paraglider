/**
 * @file presets/multi-wrapper.js
 * @module  presets
 * @author Gregor Adams <greg@pixelass.com>
 */

import Glider from '../glider'
import {PRESET_DEFAULTS} from '../config'
import {
  findFirst as $$
} from '../helpers'

/**
 * Wrapper including navigation arrows.
 * Allows using `visibleSlides` & `slideBy` options
 *
 * Use this helper to create custom sliders with arrows, to
 * navigate to different slides.
 * The options are extended by additional class names.
 * @param {Element} glider
 * @param {PRESET_DEFAULTS} opts
 * @returns {function} returns the destroy method
 */
const multiWrapper = (glider, opts) => {
  if (!glider) {
    return
  }
  const nextButton = $$(`.${opts.classNames.nextButton}`, glider)
  const prevButton = $$(`.${opts.classNames.prevButton}`, glider)
  // Prepare the options to ensure correct behavior
  // `slideBy` must be smaller or equal to `visibleSlides` and greater or equal to `1`
  const preparedOptions = {
    ...PRESET_DEFAULTS,
    ...opts
  }
  const options = {
    ...preparedOptions,
    slideBy: Math.min(preparedOptions.visibleSlides, Math.max(1, preparedOptions.slideBy)),
    onInit({next, previous, current, rest}, slides, {visibleSlides, slideBy}) {
      slides.forEach(slide => {
        slide.style.width = `${100 / visibleSlides}%`
      })
      if (typeof preparedOptions.onInit === 'function') {
        preparedOptions.onInit({next, previous, current, rest}, slides, {visibleSlides, slideBy})
      }
    },
    onDestroy() {
      if (typeof preparedOptions.onDestroy === 'function') {
        preparedOptions.onDestroy()
      }
    },
    onSlide(progress, {next, previous, current, rest}, slides, {visibleSlides, slideBy}) {
      if (typeof preparedOptions.onSlide === 'function') {
        preparedOptions.onSlide(progress, {next, previous, current, rest}, slides, {visibleSlides, slideBy})
      }
    },
    onEnd({next, previous, current, rest}, slides, {visibleSlides, slideBy}) {
      if (typeof preparedOptions.onEnd === 'function') {
        preparedOptions.onEnd({next, previous, current, rest}, slides, {visibleSlides, slideBy})
      }
    }
  }

  const instance = new Glider(options)
  instance.init(glider)
  if (nextButton) {
    nextButton.addEventListener('click', instance.nextSlide)
  }
  if (prevButton) {
    prevButton.addEventListener('click', instance.prevSlide)
  }
  return instance.destroy
}

export default multiWrapper
