import wrapper from './wrapper'

const belt = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${-100 + (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * 100)}%,0,0)`
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
    }
    if (typeof opts.onSlide === 'function') {
      opts.onSlide(progress, {next, previous, current, rest}, slides)
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    rest.forEach(slide => {
      slides[slide].style.transform = ''
    })
    slides[current].style.transform = ''
    slides[previous].style.transform = 'translate(-100%,0,0)'
    slides[next].style.transform = 'translate(100%,0,0)'
    if (typeof opts.onEnd === 'function') {
      opts.onEnd({next, previous, current, rest}, slides)
    }
  }
})

export default belt
