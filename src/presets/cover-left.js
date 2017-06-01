import wrapper from './wrapper'

const coverLeft = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide({left, right}, next, prev, current) {
    if (prev) {
      prev.style.transform = `translate3d(${-100 + (left * -100)}%,0,0)`
    } else if (next) {
      next.style.transform = `translate3d(${-100 + (right * -100)}%,0,0)`
    }
    if (typeof opts.onSlide === 'function') {
      opts.onSlide({left, right}, next, prev, current)
    }
  },
  onEnd(next, prev, current) {
    if (typeof opts.onEnd === 'function') {
      opts.onEnd(next, prev, current)
    }
  }
})

export default coverLeft
