import log from 'winston'
import build from './run-build'
import renderPug from './render-pug'

build()
  .then(renderPug)
  .catch(log.error)
