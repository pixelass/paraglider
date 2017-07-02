/* global document */
/**
 * A collection of helper functions.
 *
 * @file helpers.js
 * @module helpers
 * @author Gregor Adams <greg@pixelass.com>
 */

/* istanbul ignore next */
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

  /**
   * Loop function
   * Runs until end is reached
   */
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
  loop()
  return loop
}
/**
 * @typedef animationCallback
 * @private
 * @type {function}
 * @param {number} progress Current value between `from` and `to`
 * @example
 * animate(1000, 0, 1,
 *   p => {
 *     console.log(p)
 *   }
 * )
 */

/* istanbul ignore next */
/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)`
 * @private
 * @param {string} selector selector to find
 * @param {Element} [context=document] Context to search in
 * @returns {array} A list of matching elements
 * @example
 * findAll('.foo') // => [...]
 */
const findAll = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector))

/* istanbul ignore next */
/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)[0]`
 * @private
 * @param {string} selector selector to find
 * @param {Element} [context=document] Context to search in
 * @returns {Element} The first matching element
 * @example
 * findFirst('.foo') // => <div .../>
 */
const findFirst = (selector, context = document) =>
  context.querySelector(selector)

/* istanbul ignore next */

/**
 * Toggle class ponyFill to support IE11 and other awkward browsers.
 * IE11 can't use a second argument in `element.classList.toggle`
 * @see https://connect.microsoft.com/IE/Feedback/details/878564/
 * @private
 * @param {Element} el
 * @param {string} className
 * @param {boolean} bool
 * @author Gregor Adams <greg@pixelass.com>
 * @version [version]
 * @example
 * const element = document.querySelector('a')
 * const isActive = true
 * toggle(element, active, isActive) // add active
 * toggle(element, active, 1) // add active
 * toggle(element, active, !0) // add active
 * toggle(element, active, !!1) // add active
 * toggle(element, active, 'yes') // add active
 * toggle(element, active, 'no') // add active
 * toggle(element, active, null) // toggle active
 * toggle(element, active) // toggle active
 * toggle(element, active, false) // remove active
 * toggle(element, active, 0) // remove active
 * toggle(element, active, !!0) // remove active
 * toggle(element, active, '') // remove active
 */
const toggleClass = (el, className, bool = null) => {
  if (bool === null) {
    el.classList.toggle(className)
  } else if (bool) {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}

/**
 * Returns either the first or second value depending on truthness.
 * Any number is considered true.
 * @private
 * @param {any} either
 * @param {any} or
 * @returns {any} One of the two input values
 * @example
 * eiterOr(0, 4) // => 0
 * eiterOr('0', 4) // => '0'
 * eiterOr('foo', 4) // => 'foo'
 * eiterOr('', 4) // => 4
 * eiterOr(false, 4) // => 4
 * eiterOr(undefined, 4) // => 4
 * eiterOr(null, 4) // => 4
 * eiterOr({}, 4) // => {}
 * eiterOr([], 4) // => []
 * eiterOr(() => {}, 4) // => () => {}
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
 * @example
 * modLoop(1, 2, 3) // => 0
 * modLoop(2, 3, 4) // => 1
 * modLoop(2, -3, 4) // => 3
 * modLoop(20, -3, 20) // => 17
 * modLoop(20, -30, 20) // => 10
 */
const modLoop = (current, addition, length) =>
  (current + addition + length) % length

/**
 * Takes an array and returns a single value if it is the only item.
 * Otherwise it returns the original array.
 * @private
 * @param {array} arr Array to check
 * @returns {?any}
 * @example
 * arrayOrValue([null, 1, 2]) // => [null, 1, 2]
 * arrayOrValue([1]) // => 1
 * arrayOrValue(['a']) // => 'a'
 * arrayOrValue([1,'1']) // => [1,'1']
 * arrayOrValue([null]) // => null
 */
const arrayOrValue = arr => arr.length > 1 ? arr : arr[0]

/* istanbul ignore next */
/**
 * Parse dataset with nested object strings to a true object
 * @param {dataset} obj
 * @returns {object} valid JSON
 * @example
 * const data = parseObject(document.querySelector('.foo').dataset)
 */
const parseObject = dataset => {
  const obj = {}
  Object.keys(dataset).forEach(key => {
    let value = dataset[key]
    try {
      value = isNaN(value) ? JSON.parse(value) : Number(value)
    } catch (err) {
      // Ignore error
    }
    obj[key] = value
  })
  return obj
}

/* istanbul ignore next */
/**
 * Prevents default event
 * @param {event} e
 * @example
 * el.addEventListener('mousemove', preventDefault)
 * el.addEventListener('dragstart', e => {
 *   preventDefault(e)
 *   // ...
 * })
 */
const preventDefault = e => e.preventDefault()

export {
  findAll,
  findFirst,
  toggleClass,
  animate,
  modLoop,
  eitherOr,
  arrayOrValue,
  parseObject,
  preventDefault
}
