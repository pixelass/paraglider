import OneListener from 'one-listener'

const one = new OneListener({
  limit: 20,
  throttle: 250
})

const {requestEventListener, cancelEventListener} = one

export {requestEventListener, cancelEventListener}

export default one
