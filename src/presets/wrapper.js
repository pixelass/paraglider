import Glider from '../glider'
import {PRESET_DEFAULTS} from '../config'

const wrapper = (glider, opts) => {
  const slides = Array.from(glider.querySelectorAll(`.${opts.classNames.slide}`) || [])
  const pagers = Array.from(glider.querySelectorAll(`.${opts.classNames.dot}`) || [])
  const nextButton = glider.querySelector(`.${opts.classNames.nextButton}`)
  const prevButton = glider.querySelector(`.${opts.classNames.prevButton}`)
  const options = {
    ...PRESET_DEFAULTS,
    ...opts,
    onSlide({left, right}, next, prev, current) {
      if (typeof opts.onSlide === 'function') {
        opts.onSlide({left, right}, next, prev, current)
      }
    },
    onEnd(next, prev, current) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(opts.classNames.active, i === slides.indexOf(current))
      })
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      if (typeof opts.onEnd === 'function') {
        opts.onEnd(next, prev, current)
      }
    }
  }
  const instance = new Glider(options)
  instance.init(glider)
  pagers.forEach((pager, i) => {
    const goto = () => instance.goTo(i)
    pager.addEventListener('click', goto)
    pager.classList.toggle(options.classNames.active, i === (opts.initialSlide || 0))
  })
  nextButton.addEventListener('click', instance.nextSlide)
  prevButton.addEventListener('click', instance.prevSlide)
}

export default wrapper
