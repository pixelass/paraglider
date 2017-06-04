import log from 'winston'
import serve from './serve'
import build from './run-build'

build(true)
  .then(serve)
  .catch(log.error)
