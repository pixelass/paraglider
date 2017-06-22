/**
 * Paraglider is an API driven slider.
 *
 * Per default it simply adds class names to the previous, current and next slide.
 * With the help of callbacks however, you can add any imaginable behavior
 *
 * @file glider/index.js
 * @author Gregor Adams <greg@pixelass.com>
 */

import {PLUGIN_DEFAULTS} from '../config'
import {
  animate,
  eitherOr,
  modLoop,
  findAll as $,
  findFirst as $$
} from '../helpers'

/**
 * Paraglider plugin.
 * @type {class}
 */
class Glider {
  /**
   * A simple slider API. This class simply applies classnames
   * to the current and surrounding slides.
   *
   * It offers an API that allows you to implement any behaviour imaginable. 😂
   * @param {pluginOptions} options Custom options for the Plugin call
   * @returns {this}
   */
  constructor(options = {}) {
    /**
     * Plugin options merged from defaults and custom configuration
     * @private
     * @type {object}
     */
    this.options = {
      ...PLUGIN_DEFAULTS,
      ...options
    }
    /**
     * State store for interaction flags
     * @private
     * @type {object}
     */
    this._state = {
      currentSlide: this.options.initialSlide
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.goTo = this.goTo.bind(this)
    this.handleDown = this.handleDown.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleUp = this.handleUp.bind(this)
    this.getClientX = this.getClientX.bind(this)
  }

  /**
   * Handles internal storage
   * @private
   * @param {object} newState The new state porperties to merge into the old state
   */
  setState(newState) {
    this._state = {
      ...this.state,
      ...newState
    }
  }

  /**
   * Getter for the state
   * @private
   * @returns {object}
   */
  get state() {
    return this._state
  }

  /**
   * Init call for the plugin.
   *
   * This method assigns the element to the plugin scope, adds the required
   * eventListeners and class names.
   * @param {Element} el An element containing the required markup with and
   * selectors
   */
  init(el) {
    const {classNames} = this.options
    /**
     * Outer element
     * @private
     * @type {Element}
     */
    this.el = el
    /**
     * This element is used to track mouse or touch interaction
     * @private
     * @type {Element}
     */
    this.slidesWrapper = $$(`.${classNames.slides}`, el)
    /**
     * A list of all slides.
     * @private
     * @type {array.<Element>}
     */
    this.slides = $(`.${classNames.slide}`, this.slidesWrapper)

    this.addListeners()
    this.addSides()
    this.addInitClassNames()
  }

  /**
   * Destroys the plugin by removing eventlisteners and class names
   */
  destroy() {
    this.removeListeners()
    this.removeClassNames()
    this.el = null
    this.slidesWrapper = null
    this.slides = null
  }

  /**
   * Adds eventlisteners needed for this plugin to work.
   * Movement and release should be tracked on window or document.
   * @private
   */
  addListeners() {
    global.addEventListener('mousemove', this.handleMove, {passive: false})
    global.addEventListener('mouseup', this.handleUp)
    global.addEventListener('touchmove', this.handleMove, {passive: false})
    global.addEventListener('touchend', this.handleUp)
    this.slidesWrapper.addEventListener('mousedown', this.handleDown)
    this.slidesWrapper.addEventListener('touchstart', this.handleDown)
  }

  /**
   * Removes all eventlisteners. (Helpful when destroying the plugin instance)
   * @private
   */
  removeListeners() {
    global.removeEventListener('mousemove', this.handleMove)
    global.removeEventListener('mouseup', this.handleUp)
    global.removeEventListener('touchmove', this.handleMove)
    global.removeEventListener('touchend', this.handleUp)
    this.slidesWrapper.removeEventListener('mousedown', this.handleDown)
    this.slidesWrapper.removeEventListener('touchstart', this.handleDown)
  }

  /**
   * Adds class names to slides
   * @private
   */
  addClassNames() {
    const {currentSlide, previousSlide, nextSlide} = this.state
    const {current, next, previous} = this.options.classNames
    this.slides.forEach((slide, index) => {
      // IE11 can't use a second argument in element.classList.toggle
      // @see https://connect.microsoft.com/IE/Feedback/details/878564/
      if (index === currentSlide) {
        slide.classList.add(current)
      } else {
        slide.classList.remove(current)
      }
      if (index === nextSlide) {
        slide.classList.add(next)
      } else {
        slide.classList.remove(next)
      }
      if (index === previousSlide) {
        slide.classList.add(previous)
      } else {
        slide.classList.remove(previous)
      }
    })
  }

  /**
   * Initially set class names
   *
   * `init` will be removed after the first interaction. It allows a 'silent' start
   * when working with CSS animations or transitions.
   * @private
   */
  addInitClassNames() {
    const {classNames} = this.options
    this.el.classList.add(classNames.pluginLoaded)
    this.slides.forEach(slide => {
      slide.classList.add(classNames.init)
    })
    this.addClassNames()
  }

  /**
   * Batch removal of class names.
   * This is dirty but simply removes anything the plugin could have set.
   * @todo Find a better way to do this.
   * @private
   */
  removeClassNames() {
    const {classNames} = this.options
    const classList = (Object.keys(classNames).map(key => classNames[key]))

    this.el.classList.remove(...classList)
    this.slides.forEach(slide => {
      slide.classList.remove(...classList)
    })
  }

  /**
   * Add `previous` and `next` classes around the `current` slide.
   * This function respects pager clicks, which modify the next or previous element.
   * @private
   */
  addSides() {
    const {currentSlide, requestedNext, requestedPrevious} = this.state
    const {length} = this.slides
    // Respect requested slides.
    // {goTo} could set these values.
    const nextSlide = eitherOr(requestedNext, modLoop(currentSlide, 1, length))
    const previousSlide = eitherOr(requestedPrevious, modLoop(currentSlide, -1, length))

    this.setState({nextSlide, previousSlide})
  }

  /**
   * Moves to the next slide via trigger.
   * @param {?Event} [e=null] optionally pass the event to prevent it
   */
  nextSlide(e = null) {
    /* istanbul ignore next */
    if (e && 'preventDefault' in e) {
      e.preventDefault()
    }
    this.addSides()
    this.addClassNames()
    this.spring(0, 1, this.options.speed)
  }

  /**
   * Moves to the previous slide via trigger.
   * @param {?Event} [e=null] optionally pass the event to prevent it
   */
  prevSlide(e = null) {
    /* istanbul ignore next */
    if (e && 'preventDefault' in e) {
      e.preventDefault()
    }
    this.addSides()
    this.addClassNames()
    this.spring(0, -1, this.options.speed)
  }

  /**
   * Moves to the nth slide via trigger. Respects left/right movement
   * @param {number} n index of requested slide
   */
  goTo(n) {
    if (n > this.state.currentSlide) {
      this.setState({requestedNext: n})
      this.nextSlide()
    /* istanbul ignore next */
    } else /* istanbul ignore next */ if (n < this.state.currentSlide) {
      this.setState({requestedPrevious: n})
      this.prevSlide()
    }
  }

  /**
   * Handles the snap animation
   * @private
   * @param {number} progress Current value
   * @param {number} end Final value
   * @param {number} duration Time to pass the until animation is done.
   */
  spring(progress, end, duration) {
    // Cancel previous animations
    global.cancelAnimationFrame(this.animation)
    /**
     * Animation cache to allow canceling
     */
    this.animation = animate(duration, progress, end,
      p => {
        this.setState({
          x: p * this.el.offsetWidth
        })
        if (p === end) {
          this.handleEnd(end)
        } else {
          this.handleProgress()
        }
      }
    )
  }

  /* istanbul ignore next */
  /**
   * Find clientX from the event.
   * This helper will return the correct value for touch or mouse.
   * @private
   * @param {event} e Mouse or touch event
   * @returns {number} THe clientX of the event
   */
  getClientX(e) {
    const {touches = []} = e
    const {clientX} = touches[0] || e
    return clientX
  }

  /**
   * Prepares return values
   * @private
   * @param {boolean} direction
   * @returns {object}
   */
  getReturnValues(direction = true) {
    const progress = this.state.x / this.el.offsetWidth
    const {currentSlide, nextSlide, previousSlide} = this.state
    const right = progress * -1
    const current = currentSlide
    // We only need the lower value
    /* istanbul ignore next */
    const next = progress < right && direction ? null : nextSlide
    /* istanbul ignore next */
    const previous = progress > right && direction ? null : previousSlide

    const rest = this.slides.map((el, index) => index)
      .filter(originalIndex =>
        [previous, current, next].indexOf(originalIndex) === -1)

    return {
      next,
      previous,
      current,
      rest,
      progress: Math.abs(progress)
    }
  }

  /* istanbul ignore next */
  /**
   * First interaction with the mouse or per touch will be used to set flags and
   * define initial values.
   * @private
   * @param {event} e Mouse or touch event
   */
  handleDown(e) {
    const {classNames} = this.options
    const clientX = this.getClientX(e)
    this.slides.forEach(slide => {
      slide.classList.remove(classNames.init)
    })
    // Flag down
    // set start coordinate,
    // set current progress
    this.setState({
      down: true,
      xStart: clientX,
      x: 0
    })
  }

  /* istanbul ignore next */
  /**
   * Last interaction with the mouse or per touch will be used to set flags
   * and define initial values.
   * Only fires if down is active. Prevents unintended behaviour when the first
   * touch or mousedown was outside the element.
   * @private
   */
  handleUp() {
    // Only proceed if the plugin signals a previous down event.
    const {down, blocked} = this.state
    if (down && blocked) {
      const {snapBackAt} = this.options
      const progress = this.state.x / this.el.offsetWidth
      let end = 0
      if (progress <= (-1 * snapBackAt)) {
        end = -1
      } else if (progress >= snapBackAt) {
        end = 1
      }
      this.spring(progress, end, this.options.spring)
    }
    this.setState({down: false, blocked: false})
  }

  /* istanbul ignore next */
  /**
   * Handler vor mouse or touch movement.
   * Waits for a threshold and then records the movement on the `x` axis
   * @private
   * @param {event} e Mouse or touch move event
   */
  handleMove(e) {
    if (this.state.down) {
      const {xStart, x, blocked} = this.state
      const {threshold} = this.options
      if ((Math.abs(x) > threshold) || blocked) {
        this.setState({blocked: true})
        e.preventDefault()
        this.handleProgress()
      }
      const clientX = this.getClientX(e)
      this.setState({
        x: xStart - clientX
      })
    }
  }

  /**
   * Handles the progress. Calculates the progress from the
   * internal state and element dimension.
   * A callback is fired if set
   * @private
   */
  handleProgress() {
    const {onSlide} = this.options

    if (typeof onSlide === 'function') {
      const {
        progress,
        next,
        previous,
        current,
        rest
      } = this.getReturnValues()
      /**
       * Callback for progression
       * @type {onSlide}
       */
      onSlide(
        progress,
        {next, previous, current, rest},
        this.slides
      )
    }
  }

  /**
   * Handle the end of the slide animation.
   * If there is a callback called `onEnd` call it.
   * @private
   * @param {number} end Final value
   */
  handleEnd(end) {
    const {onEnd} = this.options
    if (end === -1) {
      this.setState({
        currentSlide: this.state.previousSlide
      })
    /* istanbul ignore next */
    } else /* istanbul ignore next */ if (end === 1) {
      this.setState({
        currentSlide: this.state.nextSlide
      })
    }
    this.setState({
      requestedNext: null,
      requestedPrevious: null
    })
    this.addSides()
    this.addClassNames()
    global.cancelAnimationFrame(this.animation)

    if (typeof onEnd === 'function') {
      const {
        next,
        previous,
        current,
        rest
      } = this.getReturnValues(false)
      /**
       * Callback for the end
       * @public
       * @type {onEnd}
       */
      onEnd({next, previous, current, rest}, this.slides)
    }
  }

}

/**
 * @typedef onSlide
 * @memberof Glider
 * @type {function}
 * @param {callbackProgress} progress Offset of the element to either side.
 * @param {callbackData} data Data about the slider activity
 * @param {Array.<Element>} slides Array of all slides
 * @example
 * new Glider({
 *  onSlide(progress, {next, previous, current, rest}, slides) {
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
 * @typedef onEnd
 * @memberof Glider
 * @type {function}
 * @param {callbackData} data Data about the slider activity
 * @param {Array.<Element>} slides Array of all slides
 * @example
 * new Glider({
 *  onEnd({next, previous, current, rest}, slides) {
 *    rest.forEach(slide => {
 *      slides[slide].style.transform = ''
 *    })
 *    slides[current].style.transform = ''
 *    slides[previous].style.transform = 'translate(-100%,0,0)'
 *    slides[next].style.transform = 'translate(100%,0,0)'
 *  }
 *})
 */

/**
 * @typedef callbackProgress
 * @property {number} left A value between [0, 1]
 * @property {number} right A value between [0, 1]
 */

/**
 * @typedef callbackData
 * @property {number} data.previous Index of previous slide
 * @property {number} data.current Index of current slide
 * @property {number} data.next Index of next slide
 * @property {Array.<number>} data.rest Array of all remaining slide indexes
 */

/**
 * @typedef pluginOptions
 * @type {object}
 * @property {object} classNames Mapping of class names to be used by the plugin.
 * @property {string} classNames.pluginLoaded Applied when the plugin has been loaded
 * @property {string} classNames.init Applied when the pugin has been initialized. Removed on first interaction.
 * @property {string} classNames.slides This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} classNames.slide Selector for each single slide.
 * @property {string} classNames.current Applied to the currently visible slide
 * @property {string} classNames.previous Applied to the previous slide in the queue
 * @property {string} classNames.next Applied to the next slide in the queue
 * @property {string} classNames.dot Selector for pager dots. (only used in `presets/wrapper`)
 * @property {string} classNames.active Active class for pager dots. (only used in `presets/wrapper`)
 * @property {string} classNames.nextButton Selector for the navigation to the next slide. (only used in `presets/wrapper`)
 * @property {string} classNames.prevButton Selector for the navigation to the previous slide. (only used in `presets/wrapper`)
 * @property {(null|onSlide)} onSlide Callback while the slider is moving.
 * @property {(null|onEnd)} onEnd Callback while the slider stopped moving.
 * @property {number} speed Animation duration when using paging.
 * @property {number} spring Animation duration when snapping.
 * @property {number} snapBackAt Amount of distance needed to snap. [0, 1]. E.g. `0.3` will snap if 1/3 has been moved
 * @property {number} threshold Threshold of pixels until the sliding mechanisms is triggered.
 * @property {number} initialSlide Initially visible slide
 */

export default Glider
