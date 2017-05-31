/* global document */
import {easeInBack, easeOutSine, easeInOutElastic} from 'easing-utils'
import Glider from '../src/glider'
import styles from './main.css' // eslint-disable-line import/no-unassigned-import

const gliders = Array.from(document.querySelectorAll('.glider'))

const classNames = {
  pluginLoaded: styles.pluginLoaded,
  active: styles.active,
  previous: styles.previous,
  next: styles.next,
  init: styles.init,
  slides: 'jsWrapper',
  slide: 'jsHook'
}

const options = (index, slides, pagers, logs) => [
  {
    classNames,
    speed: 500,
    spring: 250,
    onSlide({left, right}, next, prev) {
      if (prev) {
        prev.style.transform = `translate3d(${easeInBack(left) * 100}%,0,0)`
      } else if (next) {
        next.style.transform = `translate3d(${easeInBack(right) * 100}%,0,0)`
      }
      logs.forEach(log => {
        if (log.parentNode === next) {
          log.style.transform = `translate3d(${easeOutSine(right) * 100}%,0,0)`
        } else if (log.parentNode === prev) {
          log.style.transform = `translate3d(${easeOutSine(left) * 100}%,0,0)`
        }
      })
    },
    onEnd(next, prev, current) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(styles.activePager, i === slides.indexOf(current))
      })
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      logs.forEach(log => {
        if (log.parentNode === current) {
          log.style.transform = ''
        }
      })
    }
  },
  {
    classNames,
    speed: 300,
    spring: 150,
    initialSlide: 1,
    snapBackAt: 0.1,
    onSlide({left, right}, next, prev) {
      if (prev) {
        prev.style.transform = `translate3d(${easeInBack(left) * -100}%,0,0)`
      } else if (next) {
        next.style.transform = `translate3d(${easeInBack(right) * 100}%,0,0)`
      }
      logs.forEach(log => {
        if (log.parentNode === next) {
          log.style.transform = `translate3d(${easeInOutElastic(right) * 100}%,0,0)`
        } else if (log.parentNode === prev) {
          log.style.transform = `translate3d(${easeInOutElastic(left) * -100}%,0,0)`
        }
      })
    },
    onEnd(next, prev, current) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(styles.activePager, i === slides.indexOf(current))
      })
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      logs.forEach(log => {
        if (log.parentNode === current) {
          log.style.transform = ''
        }
      })
    }
  },
  {
    classNames,
    snapBackAt: 0.5,
    onSlide({left, right}, next, prev, current) {
      if (prev) {
        prev.style.transform = `translate3d(${left * -100}%,0,0)`
      } else if (next) {
        next.style.transform = `translate3d(${right * 100}%,0,0)`
      }
      current.style.transform = `translate3d(${(right * 100) - 100}%,0,0)`
      logs.forEach(log => {
        if (log.parentNode === next) {
          log.style.transform = `translate3d(${easeInBack(right) * 100}%,0,0)`
        } else if (log.parentNode === prev) {
          log.style.transform = `translate3d(${easeInBack(left) * -100}%,0,0)`
        } else if (log.parentNode === current) {
          log.style.transform = `translate3d(${(easeInBack(right) * 100) - 100}%,0,0)`
        }
      })
    },
    onEnd(next, prev, current) {
      pagers.forEach((pager, i) => {
        pager.classList.toggle(styles.activePager, i === slides.indexOf(current))
      })
      slides.forEach(slide => {
        slide.style.transform = ''
      })
      logs.forEach(log => {
        if (log.parentNode === current) {
          log.style.transform = ''
        }
      })
    }
  }
][index]

gliders.forEach((glider, index) => {
  const slides = Array.from(glider.querySelectorAll('.slide') || [])
  const logs = Array.from(glider.querySelectorAll('.log') || [])
  const pagers = Array.from(glider.querySelectorAll('.dot') || [])
  const nextSlide = glider.querySelector('.next')
  const prevSlide = glider.querySelector('.prev')
  const opts = options(index, slides, pagers, logs)
  const instance = new Glider(opts)
  instance.init(glider)
  pagers.forEach((pager, i) => {
    const goto = () => instance.goTo(i)
    pager.addEventListener('click', goto)
    pager.classList.toggle(styles.activePager, i === (opts.initialSlide || 0))
  })
  nextSlide.addEventListener('click', instance.nextSlide)
  prevSlide.addEventListener('click', instance.prevSlide)
})
