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

test('Glider returns an init method', t => {
  const instance = new Glider()
  t.true('init' in instance)
})

test('Glider returns a destroy method', t => {
  const instance = new Glider()
  t.true('destroy' in instance)
})

test('Glider returns a nextSlide method', t => {
  const instance = new Glider()
  t.true('nextSlide' in instance)
})

test('Glider returns a prevSlide method', t => {
  const instance = new Glider()
  t.true('prevSlide' in instance)
})

test('Glider returns a goTo method', t => {
  const instance = new Glider()
  t.true('goTo' in instance)
})

test('Glider can be initialized', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({speed: 1000, spring: 2000, initialSlide: 2})
  instance.init(glider)
  t.true(instance.el === glider)
})

test('Glider can be destroyed', t => {
  document.body.innerHTML = markup
  const glider = document.querySelector('.glider')
  const instance = new Glider({speed: 1000, spring: 2000, initialSlide: 2})
  instance.init(glider)
  t.true(instance.el === glider)
  instance.destroy()
  t.true(instance.el === null)
})

test('Glider has an working nextSlide method', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const a = glider.querySelector(`.${classNames.slide}`)
    const instance = new Glider({
      speed: SLIDE_TIME,
      onEnd() {
        resolve(a.classList.contains(classNames.previous))
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

test('Glider has an working prevSlide method', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const a = glider.querySelector(`.${classNames.slide}`)
    const instance = new Glider({
      speed: SLIDE_TIME,
      onEnd() {
        resolve(a.classList.contains(classNames.next))
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    t.true(a.classList.contains(classNames.current))
    instance.prevSlide()
  })
  t.true(await p, true)
})

test('Glider has an working goTo method', async t => {
  let b
  const p1 = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const a = glider.querySelector(`.${classNames.slide}:nth-child(3)`)
    const instance = new Glider({
      speed: SLIDE_TIME,
      initialSlide: 2,
      onEnd() {
        b = glider.querySelector(`.${classNames.slide}`)
        resolve(b.classList.contains(classNames.current))
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    t.true(a.classList.contains(classNames.current))
    instance.goTo(0)
  })
  const p2 = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const a = glider.querySelector(`.${classNames.slide}`)
    const instance = new Glider({
      speed: SLIDE_TIME,
      onEnd() {
        b = glider.querySelector(`.${classNames.slide}:nth-child(3)`)
        resolve(b.classList.contains(classNames.current))
      }
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    t.true(a.classList.contains(classNames.current))
    instance.goTo(2)
  })
  t.true(await p1, true)
  t.true(await p2, true)
})

test('Glider has a nextSlide method', async t => {
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

test('Glider has a prevSlide method', async t => {
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
    instance.prevSlide()
  })
  t.true(await p, true)
})

test('prevSlide can prevent an event', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.prevSlide({preventDefault() {
      resolve(true)
    }})
  })
  t.true(await p, true)
})

test('nextSlide can prevent an event', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME
    })
    setTimeout(() => {
      reject(new Error())
    }, TIMEOUT)
    instance.init(glider)
    instance.nextSlide({preventDefault() {
      resolve(true)
    }})
  })
  t.true(await p, true)
})
