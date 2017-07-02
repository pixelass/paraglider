/**
 * @file glider/index.js
 * @author Gregor Adams <greg@pixelass.com>
 */

import {PLUGIN_DEFAULTS} from '../config'
import {
  animate,
  eitherOr,
  arrayOrValue,
  modLoop,
  toggleClass,
  findAll as $,
  findFirst as $$
} from '../helpers'

/**
 * Paraglider plugin.
 * @type {class}
 */
class Glider {
  /**
   * Paraglider is an API driven slider.
   * It exposes a timeline and offers some options.
   *
   * This gives developers a lot of freedom when implementing a slider.
   * The main purpose for this plugin is to create slideshows with a parallax effect.
   * Due to the simplicity you can feed the timeline to other plugins and create amazing
   * effects like animating SVGs or drawing on a canvas.
   *
   * @param {PLUGIN_DEFAULTS} options Custom options for the Plugin call
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
      currentSlide: this.options.initialSlide,
      init: true
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
   * @param {object} newState The new state properties to merge into the old state
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
   * event listeners and class names.
   * @param {Element} el An element containing the required markup with and
   * selectors
   */
  init(el) {
    const {classNames, onInit} = this.options
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
    if (typeof onInit === 'function') {
      const {
        next,
        previous,
        current,
        rest
      } = this.getReturnValues(false)
      /**
       * Callback for the end
       * @public
       * @type {onInit}
       */
      onInit({next, previous, current, rest}, this.slides, this.options)
    }
  }

  /**
   * Destroys the plugin by removing event listeners and class names
   */
  destroy() {
    const {onDestroy} = this.options
    this.removeListeners()
    this.removeClassNames()
    this.el = null
    this.slidesWrapper = null
    this.slides = null
    if (typeof onDestroy === 'function') {
      /**
       * Callback for the end
       * @public
       * @type {onDestroy}
       */
      onDestroy(this.options)
    }
  }

  /**
   * Adds event listeners needed for this plugin to work.
   * Movement and release should be tracked on window or document.
   * @private
   * @listens {touchmove}
   *   Listens to touchmove if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {touchend}
   *   Listens to touchend if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {touchstart}
   *   Listens to touchstart if `enableTouch === true`
   *   scoped listener to determine activity
   * @listens {mousemove}
   *   Listens to mousemove if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {mouseup}
   *   Listens to mouseup if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {mousedown}
   *   Listens to mousedown if `enableTouch === true`
   *   scoped listener to determine activity
   */
  addListeners() {
    /* istanbul ignore next */
    if (this.options.enableTouch) {
      global.addEventListener('touchmove', this.handleMove, {passive: false})
      global.addEventListener('touchend', this.handleUp)
      this.slidesWrapper.addEventListener('touchstart', this.handleDown)
    }
    /* istanbul ignore next */
    if (this.options.enableSwipe) {
      global.addEventListener('mousemove', this.handleMove, {passive: false})
      global.addEventListener('mouseup', this.handleUp)
      this.slidesWrapper.addEventListener('mousedown', this.handleDown)
    }
  }

  /**
   * Removes all event listeners. (Helpful when destroying the plugin instance)
   * @private
   */
  removeListeners() {
    /* istanbul ignore next */
    if (this.options.enableTouch) {
      global.removeEventListener('touchmove', this.handleMove)
      global.removeEventListener('touchend', this.handleUp)
      this.slidesWrapper.removeEventListener('touchstart', this.handleDown)
    }
    /* istanbul ignore next */
    if (this.options.enableSwipe) {
      global.removeEventListener('mousemove', this.handleMove)
      global.removeEventListener('mouseup', this.handleUp)
      this.slidesWrapper.removeEventListener('mousedown', this.handleDown)
    }
  }

  /**
   * Adds class names to slides
   * @private
   */
  addClassNames() {
    const {addClasses, addMultiClasses} = this.options
    const keys = Object.keys(addClasses)
    if (keys.length > 0) {
      const {currentSlide, previousSlide, nextSlide} = this.state
      const {visibleSlides, slideBy, classNames} = this.options
      const {current, next, previous} = classNames
      const {length} = this.slides
      const diff = visibleSlides - slideBy
      this.slides.forEach((slide, index) => {
        const isCurrent = (index === currentSlide) && (addClasses.current === true)
        const isNext = (index === modLoop(nextSlide, diff, length)) && (addClasses.next === true)
        const isPrevious = (index === previousSlide) && (addClasses.previous === true)
        toggleClass(slide, current, isCurrent)
        toggleClass(slide, next, isNext)
        toggleClass(slide, previous, isPrevious)
        if (addMultiClasses.current === true) {
          for (let i = 0; i < visibleSlides; i++) {
            const isCurrent = (index === modLoop(currentSlide, i, length))
            toggleClass(slide, `${current}__${i}`, isCurrent)
          }
        }
        if ((addMultiClasses.previous === true) || (addMultiClasses.next === true)) {
          for (let i = 0; i < slideBy; i++) {
            const isNext = (index === modLoop(nextSlide, (i + diff), length)) && (addMultiClasses.next === true)
            const isPrevious = (index === modLoop(previousSlide, i, length)) && (addMultiClasses.previous === true)
            toggleClass(slide, `${next}__${i}`, isNext)
            toggleClass(slide, `${previous}__${i}`, isPrevious)
          }
        }
      })
    }
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
    const {slideBy} = this.options
    const {currentSlide, requestedNext, requestedPrevious} = this.state
    const {length} = this.slides
    // Respect requested slides.
    // {goTo} could set these values.
    const originalNext = modLoop(currentSlide, slideBy, length)
    const originalPrevious = modLoop(currentSlide, (-1 * (slideBy)), length)
    const nextSlide = eitherOr(requestedNext, originalNext)
    const previousSlide = eitherOr(requestedPrevious, originalPrevious)
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
    /* istanbul ignore next */
    if (this.state.init) {
      this.setState({init: false})
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init)
      })
    }
    this.addSides()
    this.addClassNames()
    this.spring(0, 1, this.options.speed)
    return this.state.nextSlide
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
    /* istanbul ignore next */
    if (this.state.init) {
      this.setState({init: false})
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init)
      })
    }
    this.addSides()
    this.addClassNames()
    this.spring(0, -1, this.options.speed)
    return this.state.previousSlide
  }

  /**
   * Moves to the nth slide via trigger. Respects left/right movement
   * @param {number} n index of requested slide
   */
  goTo(n) {
    if (n > this.state.currentSlide) {
      this.setState({requestedNext: n})
      return this.nextSlide()
    /* istanbul ignore next */
    } else /* istanbul ignore next */ if (n < this.state.currentSlide) {
      this.setState({requestedPrevious: n})
      return this.prevSlide()
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
    const {currentSlide, nextSlide, previousSlide} = this.state
    const {loop, visibleSlides, slideBy} = this.options
    const {length} = this.slides
    let theEnd = end
    if (!loop) {
      theEnd = end < 0 && previousSlide > currentSlide ? 0 : theEnd
      theEnd = end > 0 && modLoop(nextSlide, visibleSlides - slideBy, length) < currentSlide ? 0 : theEnd
    }
    /**
     * Animation flag. Calls the animation and stores the function to allow `cancelAnimationFrame`
     * @private
     * @type {loop}
     */
    this.animation = animate(duration, progress, theEnd,
      p => {
        this.setState({
          x: p * this.el.offsetWidth
        })
        if (p === theEnd) {
          this.handleEnd(theEnd)
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
    const {length} = this.slides
    const {visibleSlides, slideBy, loop} = this.options
    const {currentSlide, nextSlide, previousSlide} = this.state
    const progress = this.state.x / this.el.offsetWidth
    const right = progress * -1
    const currentItems = []
    for (let i = 0; i < visibleSlides; i++) {
      currentItems.push(modLoop(currentSlide, i, length))
    }
    // We only need the lower value
    const nextItems = [null]
    const useNext = (currentSlide < modLoop(nextSlide, (visibleSlides - slideBy), length)) || loop
    /* istanbul ignore next */
    const returnNext = (progress > right && direction)
    /* istanbul ignore next */
    if ((useNext && returnNext) || !direction) {
      nextItems.pop()
      for (let i = 0; i < visibleSlides; i++) {
        nextItems.push(modLoop(nextSlide, i, length))
      }
    }
    const previousItems = [null]
    const usePrevious = (currentSlide > previousSlide) || loop
    /* istanbul ignore next */
    const returnPrevious = (progress < right && direction)
    /* istanbul ignore next */
    if ((usePrevious && returnPrevious) || !direction) {
      previousItems.pop()
      for (let i = 0; i < slideBy; i++) {
        previousItems.push(modLoop(previousSlide, i, length))
      }
    }

    const rest = this.slides.map((el, index) => index)
      .filter(originalIndex =>
        [...previousItems, ...currentItems, ...nextItems].filter(x => x !== 0).indexOf(originalIndex) === -1)

    return {
      rest,
      previous: arrayOrValue(previousItems),
      next: arrayOrValue(nextItems),
      current: arrayOrValue(currentItems),
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
    const clientX = this.getClientX(e)
    /* istanbul ignore next */
    if (this.state.init) {
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init)
      })
    }
    // Flag down
    // set start coordinate,
    // set current progress
    this.setState({
      down: true,
      xStart: clientX,
      x: 0,
      init: false
    })
  }

  /* istanbul ignore next */
  /**
   * Last interaction with the mouse or per touch will be used to set flags
   * and define initial values.
   * Only fires if down is active. Prevents unintended behavior when the first
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
   * Handler for mouse or touch movement.
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
    const {onSlide, slideBy} = this.options

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
        progress * slideBy,
        {next, previous, current, rest},
        this.slides,
        this.options
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
      onEnd({next, previous, current, rest}, this.slides, this.options)
    }
  }
}

export default Glider
