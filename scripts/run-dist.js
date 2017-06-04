import {createWriteStream} from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import rm from 'rimraf'
import log from 'winston'
import browserify from 'browserify'
import watchify from 'watchify'
import errorify from 'errorify'
import collapse from 'bundle-collapser/plugin'

const distFile = path.join(__dirname, '../src/dist.js')
const distFolder = path.join(__dirname, '../dist')

const dist = (minify) => {
  const b = browserify({
    entries: [distFile],
    plugin: [errorify, collapse]
  })
  const bundle = () => {
    b.bundle().pipe(createWriteStream(path.join(distFolder, `paraglider.${ext}`)))
  }
  b.on('log', message => log.info(message))
  b.on('error', message => log.error(message))
  if (minify) {
    b.transform({
      global: true
    }, 'uglifyify')
  }
  const ext = minify ? 'min.js' : 'js'
  rm(distFolder, err => {
    if (err) {
      throw err
    }
    mkdirp(distFolder, err => {
      if (err) {
        throw err
      }
        bundle()
    })
  })
}

export default dist
