/* global document */
import '../src/dist' // eslint-disable-line import/no-unassigned-import
import styles from './main.css'

// Assign methods from global
const {
  belt,
  coverLeft,
  coverRight
} = global.Paraglider


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

belt(document.querySelector('.belt'), {classNames})
coverLeft(document.querySelector('.coverLeft'), {classNames})
coverRight(document.querySelector('.coverRight'), {classNames})
