/* global document */
import Glider from '../src/glider'
import styles from './main.css' // eslint-disable-line import/no-unassigned-import

const gliders = Array.from(document.querySelectorAll('.glider'))

const easing1 = t => Math.pow(t, 2)
const easing2 = t => Math.sqrt(t)

gliders.forEach(glider => {
  const logs = Array.from(glider.querySelectorAll('.log'))
  const nextSlide = glider.querySelector('.next')
  const prevSlide = glider.querySelector('.prev')
  const instance = new Glider({
    classNames: {
      pluginLoaded: styles.pluginLoaded,
      active: styles.active,
      previous: styles.previous,
      next: styles.next,
      back: styles.back,
      init: styles.init,
      slide: 'jsHook'
    },
    speed: 250,
    spring: 125,
    initialSlide: 4,
    snapBackAt: (1 / 3),
    onSlide({left, right}, next, prev) {
      prev.style.transform = `translate3d(${easing1(left) * -100}%,0,0)`
      next.style.transform = `translate3d(${easing1(right) * 100}%,0,0)`
      logs.forEach(log => {
        if (log.parentNode === next) {
          log.style.transform = `translate3d(${easing2(right) * 100}%,0,0)`
        } else if (log.parentNode === prev) {
          log.style.transform = `translate3d(${easing2(left) * -100}%,0,0)`
        }
      })
    },
    onEnd(current, next, prev) {
      prev.style.transform = ''
      next.style.transform = ''
      current.style.transform = ''
      logs.forEach(log => {
        if (log.parentNode === current) {
          log.style.transform = 'translate3d(0,0,0)'
        }
      })
    }
  })
  instance.init(glider)
  nextSlide.addEventListener('click', instance.nextSlide)
  prevSlide.addEventListener('click', instance.prevSlide)
})
