import {JSDOM} from 'jsdom'

/**
 * Initialize jsdom environment
 */
const initDom = () => {
  const dom = new JSDOM('<!doctype html><html><body></body></html>')
  global.window = dom.window
  global.document = dom.window.document
  global.navigator = global.window.navigator
  global.addEventListener = () => {}
  global.removeEventListener = () => {}

  global.requestAnimationFrame = function () {
    const fps = 60
    const delay = 1000 / fps
    const startTime = Date.now()
    let previousTime = startTime
    return callback => {
      const requestTime = Date.now()
      const timeout = Math.max(0, delay - (requestTime - previousTime))
      const callTime = requestTime + timeout
      previousTime = callTime
      return global.setTimeout(() => {
        callback(callTime - startTime)
      }, timeout)
    }
  }()
  global.cancelAnimationFrame = id => {
    global.clearTimeout(id)
  }
}

export default initDom
