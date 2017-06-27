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

test('Glider allows setting options', t => {
  const instance = new Glider({speed: 1000, spring: 2000, initialSlide: 2})
  t.true(instance.options.speed === 1000)
  t.true(instance.options.spring === 2000)
  t.true(instance.options.initialSlide === 2)
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

test('Glider can have multiple visible slides', async t => {
  const p = new Promise((resolve, reject) => {
    document.body.innerHTML = markup
    const glider = document.querySelector('.glider')
    const instance = new Glider({
      speed: SLIDE_TIME,
      visibleSlides: 2,
      onSlide(progress, {current}) {
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

test('Glider can slide by less than the amount of visible slides', async t => {
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

test('Glider has an working nextSlide callback', async t => {
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

test('Glider has an working prevSlide callback', async t => {
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

test('Glider has an working goTo callback', async t => {
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
