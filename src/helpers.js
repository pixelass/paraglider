/* global document */
/**
 * @file src/helpers.js
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Animates from one value to the other over a given time.
 * This function uses requestAnimationFrame and Date to return a reliable result.
 * @private
 * @param {integer} speed Duration of animation
 * @param {number} from Starting point
 * @param {number} to End point
 * @param {animationCallback} callback Callback to be run on every step.
 * @returns {function} A looping function.
 */
const animate = (speed, from, to, callback) => {
  const now = Date.now()
  const step = (to - from) / speed
  const loop = () => {
    const then = Date.now()
    const diff = then - now
    const timeLeft = speed - diff

    if (timeLeft > 0) {
      global.requestAnimationFrame(loop)
      callback(from + (step * diff))
    } else {
      global.cancelAnimationFrame(loop)
      callback(to)
    }
  }
  return loop()
}
/**
 * @typedef animationCallback
 * @type {function}
 * @param {number} progress Current value between `from` and `to`
 */

/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)`
 * @private
 * @param {string} selector selector to find
 * @param {HTMLElement} [context=document] Context to search in
 * @returns {array} A list of matching elements
 */
const findAll = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector))

/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)[0]`
 * @private
 * @param {string} selector selector to find
 * @param {HTMLElement} [context=document] Context to search in
 * @returns {HTMLElement} The first matching element
 */
const findFirst = (selector, context = document) =>
  context.querySelector(selector)

/**
 * Returns either the first or second value depending on truthness.
 * Any number is considered true.
 * @private
 * @param {*} either
 * @param {*} or
 * @returns {*} One of the two input values
 */
const eitherOr = (either, or) =>
  typeof either === 'number' ? either : (either || or)

/**
 * A loop using modulo
 * @private
 * @param {number} current Current value
 * @param {number} addition Addition to the current value
 * @param {number} length Maximum value.
 * @returns {number} Resulting number
 */
const modLoop = (current, addition, length) =>
  (current + addition + length) % length

export {
  findAll,
  findFirst,
  animate,
  modLoop,
  eitherOr
}
