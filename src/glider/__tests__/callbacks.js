/* global document */
import test from 'ava'
import initDom from '../../../test/jsdom'
import Glider from '../'
import {PLUGIN_DEFAULTS} from '../../config'

initDom()

const SLIDE_TIME = 64
const TIMEOUT = SLIDE_TIME * 4
const {classNames} = PLUGIN_DEFAULTS
const createMarkup = n => `<div class="glider"><div class="${classNames.slides}">${
  Array.from(Array(n)).map(() =>
    `<div class="${classNames.slide}"></div>`
  ).join('')
}</div></div>`
const markup = createMarkup(3)

test('Glider has an onEnd callback', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      onEnd() {
        resolve(true)
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.nextSlide()
  })
  t.true(await p, true)
})

test('Glider has an onSlide callback', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      onSlide() {
        resolve(true)
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.nextSlide()
  })
  t.true(await p, true)
})

test('Glider has an onInit callback', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      onInit() {
        resolve(true)
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
  })
  t.true(await p, true)
})

test('Glider has an onDestroy callback', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      onDestroy() {
        resolve(true)
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.destroy()
  })
  t.true(await p, true)
})
