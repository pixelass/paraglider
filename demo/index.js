/* global document */
import {easeOutSine, easeInQuad, easeOutQuad} from 'easing-utils'
import {
  belt,
  coverLeft,
  coverRight,
  coverLeftRight
} from '../src/presets'
import wrapper from '../src/presets/wrapper'
import styles from './main.css'

const classNames = {
  pluginLoaded: styles.pluginLoaded,
  current: styles.current,
  previous: styles.previous,
  next: styles.next,
  init: styles.init,
  active: styles.active,
  slides: 'jsWrapper',
  slide: 'jsHook',
  dot: 'jsDot',
  prevButton: 'jsPrev',
  nextButton: 'jsNext'
}

const ex1 = document.querySelector('.ex1')
const ex1Logs = Array.from(ex1.querySelectorAll('.log') || [])
belt(ex1, {
  classNames,
  initialSlide: 3,
  onSlide({left, right}, next, prev, current) {
    ex1Logs.forEach(log => {
      if (log.parentNode === next) {
        log.style.transform = `translate3d(${100 + (easeOutSine(right) * 100)}%,0,0)`
      } else if (log.parentNode === prev) {
        log.style.transform = `translate3d(${-100 - (easeOutSine(left) * 100)}%,0,0)`
      } else if (log.parentNode === current) {
        log.style.transform = `translate3d(${(easeOutSine(right) * 100)}%,0,0)`
      }
    })
  },
  onEnd(next, prev, current) {
    ex1Logs.forEach(log => {
      if (log.parentNode === current) {
        log.style.transform = ''
      }
    })
  }
})

const coverRightCustom = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide({left, right}, next, prev, current) {
    if (prev) {
      prev.style.transform = `translate3d(${100 + (easeOutSine(left) * 100)}%,0,0)`
    } else if (next) {
      next.style.transform = `translate3d(${100 + (easeOutSine(right) * 100)}%,0,0)`
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

const ex2 = document.querySelector('.ex2')
const ex2Logs = Array.from(ex2.querySelectorAll('.log') || [])
coverRightCustom(ex2, {
  classNames,
  initialSlide: 2,
  speed: 1000,
  spring: 500,
  onSlide({left, right}, next, prev) {
    ex2Logs.forEach(log => {
      if (log.parentNode === next) {
        log.style.transform = `translate3d(${100 - (easeInQuad(right) * 100)}%,0,0)`
      } else if (log.parentNode === prev) {
        log.style.transform = `translate3d(${100 - (easeOutQuad(left) * 100)}%,0,0)`
      }
    })
  },
  onEnd(next, prev, current) {
    ex2Logs.forEach(log => {
      if (log.parentNode === current) {
        log.style.transform = ''
      }
    })
  }
})

belt(document.querySelector('.belt'), {classNames})
coverLeftRight(document.querySelector('.coverLeftRight'), {classNames})
coverRight(document.querySelector('.coverRight'), {classNames})
coverLeft(document.querySelector('.coverLeft'), {classNames})
