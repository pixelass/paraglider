import Glider from '../glider'
import {PRESET_DEFAULTS} from '../config'

const wrapper = (glider, opts) => {
  const pagers = Array.from(glider.querySelectorAll(`.${opts.classNames.dot}`) || [])
  const nextButton = glider.querySelector(`.${opts.classNames.nextButton}`)
  const prevButton = glider.querySelector(`.${opts.classNames.prevButton}`)
  const options = {
    ...PRESET_DEFAULTS,
    ...opts,
    onSlide(progress, {next, previous, current, rest}, slides) {
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, {next, previous, current, rest}, slides)
      }
    },
    onEnd({next, previous, current, rest}, slides) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(opts.classNames.active, i === current)
      })
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({next, previous, current, rest}, slides)
      }
    }
  }
  const instance = new Glider(options)
  instance.init(glider)
  pagers.forEach((pager, i) => {
    const goto = e => {
      e.preventDefault()
      return instance.goTo(i)
    }
    pager.addEventListener('click', goto)
    pager.classList.toggle(options.classNames.active, i === (opts.initialSlide || 0))
  })
  if (nextButton) {
    nextButton.addEventListener('click', instance.nextSlide)
  }
  if (prevButton) {
    prevButton.addEventListener('click', instance.prevSlide)
  }
  return instance.destroy
}

export default wrapper
