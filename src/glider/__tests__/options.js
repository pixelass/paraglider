/* global document */
import 'babel-polyfill' // eslint-disable-line import/no-unassigned-import
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

test('Glider allows setting options', t => {
  const instance = new Glider({speed: 1000, spring: 2000, initialSlide: 2})
  t.true(instance.options.speed === 1000)
  t.true(instance.options.spring === 2000)
  t.true(instance.options.initialSlide === 2)
})

test('Option: {initialSlide} sets the correct class names', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({initialSlide: 2})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.true(slides[0].classList.contains(classNames.next))
  t.true(slides[1].classList.contains(classNames.previous))
  t.true(slides[2].classList.contains(classNames.current))
})

test('Option: {addClasses} class names can be disabled', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addClasses: {}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(classNames.current))
  t.false(slides[1].classList.contains(classNames.next))
  t.false(slides[2].classList.contains(classNames.previous))
})

test('Option: {addClasses} class names can be set separately (current)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addClasses: {current: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.true(slides[0].classList.contains(classNames.current))
  t.false(slides[1].classList.contains(classNames.next))
  t.false(slides[2].classList.contains(classNames.previous))
})

test('Option: {addClasses} class names can be set separately (previous)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addClasses: {previous: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(classNames.current))
  t.false(slides[1].classList.contains(classNames.next))
  t.true(slides[2].classList.contains(classNames.previous))
})

test('Option: {addClasses} class names can be set separately (next)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addClasses: {next: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(classNames.current))
  t.true(slides[1].classList.contains(classNames.next))
  t.false(slides[2].classList.contains(classNames.previous))
})

test('Option: {addMultiClasses} Multiple class names can be disabled', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addMultiClasses: {}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(`${classNames.current}__0`))
  t.false(slides[1].classList.contains(`${classNames.next}__0`))
  t.false(slides[2].classList.contains(`${classNames.previous}__0`))
})

test('Option: {addMultiClasses} Multiple class names can be set separately (current)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addMultiClasses: {current: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.true(slides[0].classList.contains(`${classNames.current}__0`))
  t.false(slides[1].classList.contains(`${classNames.next}__0`))
  t.false(slides[2].classList.contains(`${classNames.previous}__0`))
})

test('Option: {addMultiClasses} Multiple class names can be set separately (previous)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addMultiClasses: {previous: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(`${classNames.current}__0`))
  t.false(slides[1].classList.contains(`${classNames.next}__0`))
  t.true(slides[2].classList.contains(`${classNames.previous}__0`))
})

test('Option: {addMultiClasses} Multiple class names can be set separately (next)', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({addMultiClasses: {next: true}})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.false(slides[0].classList.contains(`${classNames.current}__0`))
  t.true(slides[1].classList.contains(`${classNames.next}__0`))
  t.false(slides[2].classList.contains(`${classNames.previous}__0`))
})

test('Option: {loop} loop can prevent `prevSlide`', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      loop: false,
      onEnd({current}) {
        resolve(current === 0)
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.prevSlide()
  })
  t.true(await p, true)
})

test('Option: {loop} loop can prevent `nextSlide`', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      initialSlide: 2,
      loop: false,
      onEnd({current}) {
        resolve(current === 2)
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

test('Option: {visibleSlides} Glider can have multiple visible slides', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      visibleSlides: 2,
      onInit({current}) {
        if (current.length === 2) {
          resolve(true)
        } else {
          reject(new Error())
        }
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

test('Option: {slideBy} Glider can slide by less than the amount of visible slides', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = createMarkup(6)
    const glider = document.querySelector('.glider')
    const slides = glider.querySelectorAll(`.${classNames.slide}`)
    const a = slides[0]
    const b = slides[2]
    const instance = new Glider({
      speed: SLIDE_TIME,
      visibleSlides: 4,
      slideBy: 2,
      onEnd() {
        resolve(b.classList.contains(classNames.current))
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    t.true(a.classList.contains(classNames.current))
    instance.nextSlide()
  })
  t.true(await p, true)
})

test('Option: {slideBy} sets the correct class names', t => {
  document.body.innerHTML = createMarkup(6)
  const glider = document.querySelector('.glider')
  const instance = new Glider({visibleSlides: 2, slideBy: 2})
  instance.init(glider)
  const slides = Array.from(glider.querySelectorAll(`.${classNames.slide}`))
  t.true(slides[2].classList.contains(classNames.next))
  t.true(slides[4].classList.contains(classNames.previous))
  t.true(slides[0].classList.contains(classNames.current))
})

test('Option: {slideBy} scrolls the correct amount', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = createMarkup(6)
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      slideBy: 2,
      visibleSlides: 2,
      onEnd({current, next, previous}) {
        resolve({
          current: current[0] === 2,
          next: next[0] === 4,
          previous: previous[0] === 0
        })
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.nextSlide()
  })
  t.true((await p).current, true)
  t.true((await p).previous, true)
  t.true((await p).next, true)
})
