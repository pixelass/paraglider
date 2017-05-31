import {requestEventListener} from '../event-listeners'

/**
 * Default plugin settings
 * @type {object}
 * @prop {string} type One of:
 *                     * carousel: A carousel that moves as an entire strip.
 *                     * cover: Cover the current slide with the new slide.
 *                     * uncover: Uncover the new slide below current the slide.
 *                     * custom: Don't apply styles. Work with API instead.
 *                       This can be used to implement any transition (e.g. fade)
 * @prop {boolean} loop Loop the slides or stop at the first and last slide.
 */
const PLUGIN_DEFAULTS = {
  type: 'cover',
  loop: false,
  classNames: {
    pluginLoaded: 'pluginLoaded',
    back: 'back',
    active: 'active',
    init: 'init',
    previous: 'previous',
    next: 'next'
  },
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  initialSlide: 0
}

const animate = (speed, from, to, callback) => {
  const now = Date.now()
  const step = (to - from) / speed

  const loop = () => {
    const then = Date.now()
    const diff = then - now
    const timeLeft = speed - diff

    if (timeLeft > 0) {
      global.requestAnimationFrame(loop)
      return callback(from + (step * diff))
    }
    global.cancelAnimationFrame(loop)
    return callback(to)
  }
  return loop()
}

class Glider {
  constructor(options) {
    this.options = {
      ...PLUGIN_DEFAULTS,
      ...options
    }
    this.state = {
      currentSlide: this.options.initialSlide
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.goTo = this.goTo.bind(this)
    this.handleDown = this.handleDown.bind(this)
    this.getClientX = this.getClientX.bind(this)
  }

  init(el) {
    const {classNames} = this.options
    this.el = el
    this.addListeners()
    this.slides = Array.from(this.el.querySelectorAll(`.${classNames.slide}`))
    this.addSides()
    this.addInitClassNames()
  }

  addListeners() {
    this.listeners = [
      requestEventListener('mousemove', this.handleMove.bind(this)),
      requestEventListener('mouseup', this.handleUp.bind(this)),
      requestEventListener('touchmove', this.handleMove.bind(this)),
      requestEventListener('touchend', this.handleUp.bind(this))
    ]
    this.el.addEventListener('mousedown', this.handleDown)
    this.el.addEventListener('touchstart', this.handleDown)
  }

  removeListeners() {
    this.listeners.forEach(cancelListener => cancelListener())
    this.el.removeEventListener('mousedown', this.handleDown)
    this.el.removeEventListener('touchstart', this.handleDown)
  }

  addClassNames(back) {
    const {currentSlide, previousSlide, nextSlide} = this.state
    const {classNames} = this.options
    this.slides.forEach((slide, index) => {
      const movesBack = Boolean(back && ((index === previousSlide) || (index === nextSlide) || (index === currentSlide)))
      slide.classList.toggle(classNames.active, index === currentSlide)
      slide.classList.toggle(classNames.next, index === nextSlide)
      slide.classList.toggle(classNames.previous, index === previousSlide)
      slide.classList.toggle(classNames.back, movesBack)
    })
  }

  addInitClassNames() {
    const {classNames} = this.options
    this.el.classList.add(classNames.pluginLoaded)
    this.slides.forEach(slide => {
      slide.classList.add(classNames.init)
    })
    this.addSides()
    this.addClassNames()
  }

  removeClassNames() {
    const {classNames} = this.options
    this.el.classList.remove(...(Object.keys(classNames).map(key => classNames[key])))
  }

  destroy() {
    this.removeListeners()
    this.removeClassNames()
  }

  getClientX(e) {
    const {touches = []} = e
    const {clientX} = touches[0] || e
    return clientX
  }

  addSides() {
    const {currentSlide} = this.state
    const {length} = this.slides
    this.state = {
      ...this.state,
      nextSlide: (currentSlide + 1) % length,
      previousSlide: (currentSlide - 1 + length) % length
    }
  }

  handleDown(e) {
    const {classNames} = this.options
    const clientX = this.getClientX(e)
    this.slides.forEach(slide => {
      slide.classList.remove(classNames.init)
    })
    this.state = {
      ...this.state,
      down: true,
      xStart: clientX,
      x: 0
    }
  }

  handleUp() {
    if (!this.state.down) {
      return
    }
    this.state = {
      ...this.state,
      down: false
    }
    const {snapBackAt} = this.options
    const {x} = this.state
    const progress = x / this.el.offsetWidth
    let end = 0
    if (progress <= (-1 * snapBackAt)) {
      end = -1
    } else if (progress >= snapBackAt) {
      end = 1
    }
    this.spring(progress, end, this.options.spring)
  }

  nextSlide() {
    this.state.down = false
    this.spring(0, 1, this.options.speed)
  }

  prevSlide() {
    this.state.down = false
    this.spring(0, -1, this.options.speed)
  }

  /**
   * @todo This does not work
   */
  goTo(n) {
    if (n > this.state.currentSlide) {
      this.state.nextSlide = n
      this.nextSlide()
    } else if (n < this.state.currentSlide) {
      this.state.previousSlide = n
      this.prevSlide()
    }
  }

  handleEnd(end) {
    if (end === -1) {
      this.state = {
        ...this.state,
        currentSlide: this.state.previousSlide
      }
    } else if (end === 1) {
      this.state = {
        ...this.state,
        currentSlide: this.state.nextSlide
      }
    }
    const {onEnd} = this.options
    this.addSides()
    this.addClassNames()
    if (typeof onEnd === 'function') {
      const {currentSlide, previousSlide, nextSlide} = this.state
      onEnd(this.slides[currentSlide], this.slides[nextSlide], this.slides[previousSlide])
    }
  }

  spring(progress, end, duration) {
    animate(duration, progress, end,
      p => {
        const x = p * this.el.offsetWidth
        this.state = {
          ...this.state,
          x
        }
        if (p === end) {
          this.handleEnd(end)
        } else {
          this.handleProgress()
        }
      }
    )
  }

  handleMove(e) {
    const {down, xStart} = this.state
    if (down) {
      const clientX = this.getClientX(e)
      const x = xStart - clientX
      this.state = {
        ...this.state,
        x
      }
      this.handleProgress()
    }
  }

  handleProgress() {
    const {onSlide} = this.options
    const {currentSlide, nextSlide, previousSlide, x} = this.state

    const progress = x / this.el.offsetWidth
    if (typeof onSlide === 'function') {
      onSlide(
        {
          left: Math.max(-1, -1 - progress) * -1,
          right: Math.min(1, 1 - progress)
        }, this.slides[nextSlide], this.slides[previousSlide], this.slides[currentSlide]
      )
    }
  }
}

export default Glider

