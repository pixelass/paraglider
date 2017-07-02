import {createWriteStream} from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import rm from 'rimraf'
import log from 'winston'
import browserify from 'browserify'
import dependify from 'dependify'
import watchify from 'watchify'
import errorify from 'errorify'
import collapse from 'bundle-collapser/plugin'

const inFile = path.join(__dirname, '../src/index.js')
const distFolder = path.join(__dirname, '../dist')

const dist = (minify) => {
  const b = browserify({
    entries: [inFile],
    plugin: [errorify, collapse]
  })
  const bundle = () => {
    b.bundle().pipe(createWriteStream(path.join(distFolder, `paraglider.${ext}`)))
  }
  b.on('log', message => log.info(message))
  b.on('error', message => log.error(message))
  if (minify) {
    b.transform({
      exts: ['.js'],
      global: true,
      mangle: true,
      compress: {
        sequences: true,
        dead_code: true,
        booleans: true
      }
    }, 'uglifyify')
  }
  b.plugin(dependify, {
    name: 'Paraglider'
  })
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
