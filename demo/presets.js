/* global document */
import {
  belt,
  coverLeft,
  coverRight,
  coverLeftRight
} from '../src/presets' // eslint-disable-line import/no-unassigned-import
import './main.css' // eslint-disable-line import/no-unassigned-import
import styles from './presets.css'

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

belt(document.querySelector(`.${styles.belt}`), {classNames, loop: false})
coverLeft(document.querySelector(`.${styles.coverLeft}`), {classNames})
coverRight(document.querySelector(`.${styles.coverRight}`), {classNames})
coverLeftRight(document.querySelector(`.${styles.coverLeftRight}`), {classNames})
