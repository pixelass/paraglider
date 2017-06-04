/* global document */
import '../src/dist' // eslint-disable-line import/no-unassigned-import
import './main.css' // eslint-disable-line import/no-unassigned-import
import styles from './dist.css'

// Assign methods from global
const {
  belt,
  coverLeft,
  coverRight,
  coverLeftRight
} = global.Paraglider

const classNames = {
  pluginLoaded: styles.pluginLoaded,
  current: styles.current,
  previous: styles.previous,
  next: styles.next,
  init: styles.init,
  active: styles.active,
  slides: styles.jsWrapper,
  slide: styles.jsSlide,
  dot: styles.jsDot,
  prevButton: styles.jsPrev,
  nextButton: styles.jsNext
}

belt(document.querySelector(`.${styles.belt}`), {classNames})
coverLeft(document.querySelector(`.${styles.coverLeft}`), {classNames})
coverRight(document.querySelector(`.${styles.coverRight}`), {classNames})
coverLeftRight(document.querySelector(`.${styles.coverLeftRight}`), {classNames})
