/**
 * Type definitions for Paraglider callbacks.
 *
 * @file types.js
 * @module types
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Callback while the Glider is moving
 * @typedef onSlide
 * @memberof Glider
 * @type {function}
 * @param {number} progress Timeline of scroll progress `[0, 1]`
 * @param {callbackData} data Data about the slider activity
 * @param {Array.<Element>} slides Array of all slides
 * @param {callbackOptions} options Subset of options
 * @example
 * new Glider({
 *  onSlide(progress, {next, previous, current, rest}, slides, options) {
 *    if (previous !== null) {
 *      slides[previous].style.transform = `translate3d(${-100 + (progress * 100)}%,0,0)`
 *      slides[current].style.transform = `translate3d(${(progress * 100)}%,0,0)`
 *    } else if (next !== null) {
 *      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
 *      slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
 *    }
 *  }
 *})
 */

/**
 * Callback when the Glider stopped moving
 * @typedef onEnd
 * @memberof Glider
 * @type {function}
 * @param {callbackData} data Data about the slider activity
 * @param {Array.<Element>} slides Array of all slides
 * @param {callbackOptions} options Subset of options
 * @example
 * new Glider({
 *  onEnd({next, previous, current, rest}, slides, options) {
 *    rest.forEach(slide => {
 *      slides[slide].style.transform = ''
 *    })
 *    slides[current].style.transform = ''
 *    slides[previous].style.transform = 'translate3d(-100%,0,0)'
 *    slides[next].style.transform = 'translate3d(100%,0,0)'
 *  }
 *})
 */

/**
 * Callback when the Glider has been created
 * @typedef onInit
 * @memberof Glider
 * @type {function}
 * @param {callbackData} data Data about the slider activity
 * @param {Array.<Element>} slides Array of all slides
 * @param {PLUGIN_DEFAULTS|PRESET_DEFAULTS} options
 * @example
 * new Glider({
 *  onInit({next, previous, current, rest}, slides, options) {
 *    slides[current].style.background = 'red'
 *  }
 *})
 */

/**
 * Callback when the Glider has been destroyed
 * @typedef onDestroy
 * @memberof Glider
 * @type {function}
 * @param {PLUGIN_DEFAULTS|PRESET_DEFAULTS} options
 * @example
 * new Glider({
 *  onDestroy(options) {
 *    // Slider has been destroyed
 *  }
 *})
 */

/**
 * @typedef callbackData
 * @property {?(number|Array.<number>)} previous
 *   Could be an Array, a number or null.
 *   * `null`: no items available
 *   * `number`: one item available
 *   * `array`: multiple items available
 * @property {?(number|Array.<number>)} current
 *   Could be an Array, a number or null.
 * * `null`: no items available
 * * `number`: one item available
 * * `array`: multiple items available
 * @property {?(number|Array.<number>)} next
 *   Could be an Array, a number or null.
 * * `null`: no items available
 * * `number`: one item available
 * * `array`: multiple items available
 * @property {Array.<number>} rest
 *   Array of all remaining slide indexes.
 *   If none are left the array is just empty
 */
