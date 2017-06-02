import {PLUGIN_DEFAULTS} from '../config'
import {
  animate,
  eitherOr,
  modLoop,
  findAll as $,
  findFirst as $$
} from '../helpers'

class Glider {
  /**
   * A simple slider API. This class simply applies classnames
   * to the current and surrounding slides.
   *
   * It offers an API that allows you to implement any behaviour imaginable. 😂
   * @param {object} options Custom options for the Plugin call
   * @returns {this}
   */
  constructor(options = {}) {
    this.options = {
      ...PLUGIN_DEFAULTS,
      ...options
    }
    /**
     * State store for interaction flags
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
   * @param {object} newState The new state porperties to merge into the old state
   */
  setState(newState) {
    this._state = {
      ...this.state,
      ...newState
    }
  }

  get state() {
    return this._state
  }

  set state(x) {
    throw new Error('Attempted to set state via a setter. Please use the setState method instead.')
  }

  /**
   * Init call for the plugin.
   *
   * This method assigns the element to the plugin scope, adds the required
   * eventListeners and class names.
   * @param {HTMLElement} el An element containing the required markup with and
   * selectors
   */
  init(el) {
    const {classNames} = this.options
    this.el = el
    this.slidesWrapper = $$(`.${classNames.slides}`, el)
    this.slides = $(`.${classNames.slide}`, this.slidesWrapper)

    this.addListeners()
    this.addSides()
    this.addInitClassNames()
  }

  /**
   * Adds eventlisteners needed for this plugin to work.
   * Movement and release should be tracked on window or document.
   */
  addListeners() {
    global.addEventListener('mousemove', this.handleMove)
    global.addEventListener('mouseup', this.handleUp)
    global.addEventListener('touchmove', this.handleMove)
    global.addEventListener('touchend', this.handleUp)
    this.slidesWrapper.addEventListener('mousedown', this.handleDown)
    this.slidesWrapper.addEventListener('touchstart', this.handleDown)
  }

  /**
   * Removes all eventlisteners. (Helpful when destroying the plugin instance)
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
   */
  addClassNames() {
    const {currentSlide, previousSlide, nextSlide} = this.state
    const {current, next, previous} = this.options.classNames
    this.slides.forEach((slide, index) => {
      slide.classList.toggle(current, index === currentSlide)
      slide.classList.toggle(next, index === nextSlide)
      slide.classList.toggle(previous, index === previousSlide)
    })
  }

  /**
   * Initially set class names
   *
   * `init` will be removed after the first interaction. It allows a 'silent' start
   * when working with CSS animations or transitions.
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
   * Destroys the plugin by removing eventlisteners and class names
   */
  destroy() {
    this.removeListeners()
    this.removeClassNames()
  }

  /**
   * Find clientX from the event.
   * This helper will return the correct value for touch or mouse.
   * @param {event} e Mouse or touch event
   * @returns {number} THe clientX of the event
   */
  getClientX(e) {
    const {touches = []} = e
    const {clientX} = touches[0] || e
    return clientX
  }

  /**
   * Add `previous` and `next` classes around the `current` slide.
   * This function respects pager clicks, which modify the next or previous element.
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
   * First interaction with the mouse or per touch will be used to set flags and
   * define initial values.
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

  /**
   * Last interaction with the mouse or per touch will be used to set flags
   * and define initial values.
   * Only fires if down is active. Prevents unintended behaviour when the first
   * touch or mousedown was outside the element.
   */
  handleUp() {
    // Only proceed if the plugin signals a previous down event.
    if (!this.state.down) {
      return
    }
    this.setState({down: false})
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

  /**
   * Moves to the next slide via trigger.
   */
  nextSlide() {
    this.addSides()
    this.addClassNames()
    this.spring(0, 1, this.options.speed)
  }

  /**
   * Moves to the previous slide via trigger.
   */
  prevSlide() {
    this.addSides()
    this.addClassNames()
    this.spring(0, -1, this.options.speed)
  }

  /**
   * Moves to the nth slide via trigger. Respects left/right movement
   */
  goTo(n) {
    if (n > this.state.currentSlide) {
      this.setState({requestedNext: n})
      this.nextSlide()
    } else if (n < this.state.currentSlide) {
      this.setState({requestedPrevious: n})
      this.prevSlide()
    }
  }

  /**
   * Handle the end of the slide animation.
   * If there is a callback called `onEnd` call it.
   * @param {number} end Final value
   */
  handleEnd(end) {
    const {onEnd} = this.options
    if (end === -1) {
      this.setState({
        currentSlide: this.state.previousSlide
      })
    } else if (end === 1) {
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

    if (typeof onEnd === 'function') {
      const {currentSlide, previousSlide, nextSlide} = this.state
      onEnd(this.slides[nextSlide], this.slides[previousSlide], this.slides[currentSlide])
    }
  }

  /**
   * Handles the snap animation
   * @param {number} progress Current value
   * @param {number} end Final value
   * @param {number} duration Time to pass the until animation is done.
   */
  spring(progress, end, duration) {
    animate(duration, progress, end,
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

  /**
   * Handler vor mouse or touch movement.
   * Waits for a threshold and then records the movement on the `x` axis
   * @param {event} e Mouse or touch move event
   */
  handleMove(e) {
    const {down, xStart} = this.state
    if (down) {
      if (Math.abs(this.state.x) > this.options.threshold) {
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
   */
  handleProgress() {
    const {onSlide} = this.options
    const {currentSlide, nextSlide, previousSlide, x} = this.state
    const progress = x / this.el.offsetWidth

    if (typeof onSlide === 'function') {
      const right = progress * -1
      const left = progress
      const current = this.slides[currentSlide]
      // Set left or right to null if we don't need it.
      // We only need the lower value
      const next = left < right ? null : this.slides[nextSlide]
      const prev = left > right ? null : this.slides[previousSlide]

      // Values were inverted to determine the winner.
      // Invert values back when firing the callback.
      onSlide({right: right * -1, left: left * -1}, next, prev, current)
    }
  }
}

/**
 * @typedef onSlide
 * @param {object} offset Offset of the element to either side.
 * @param {number} offset.left A value between [0, 1]
 * @param {number} offset.right A value between [0, 1]
 * @param {HTMLElement} next The next slide element
 * @param {HTMLElement} previous The previous slide element
 * @param {HTMLElement} current The current slide element
 */

/**
 * @typedef onEnd
 * @param {HTMLElement} next The next slide element
 * @param {HTMLElement} previous The previous slide element
 * @param {HTMLElement} current The current slide element
 */

export default Glider

