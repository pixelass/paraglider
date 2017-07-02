import {createWriteStream} from 'fs'
import path from 'path'
import log from 'winston'
import browserify from 'browserify'
import watchify from 'watchify'
import errorify from 'errorify'
import cssModulesify from 'css-modulesify'
import cssNext from 'postcss-cssnext'
import collapse from 'bundle-collapser/plugin'
import rm from 'rimraf'
import copy from 'copy'
import globby from 'globby'
import sharp from 'sharp'
import shortid from './shortid'
import longid from './longid'

const demoFolder = path.join(__dirname, '../demo')
const buildFolder = path.join(__dirname, '../docs')

const views = path.join(__dirname, '../views')

const fileGlob = [path.join(views, '*.pug'), `!${path.join(views, '_*.pug')}`]

// These files will be copied from the demoFolder to the buildFolder
const demoFiles = [
  'favico.png',
  'assets/*'
]

const build = (watch = false) => new Promise((resolve, reject) => {
  const prod = process.env.NODE_ENV === 'production'
  globby([path.join(buildFolder, '*.{js,css,png,html,json}'), path.join(buildFolder, 'assets/*')]).then(files =>
    Promise.all(files.map(file => new Promise((resolve, reject) => {
      rm(file, err => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })))
  )
  .catch(err => {
    throw err
  })
  .then(() => {
    globby(demoFiles.map(fileName => path.join(demoFolder, fileName))).then(files => files.forEach(file => {
      const {ext} = path.parse(file)
      if (ext.match(/.jpg/)) {
        sharp(file)
          .rotate()
          .resize(1600, 1200)
          .crop(sharp.strategy.entropy)
          .toFile(file.replace(demoFolder, buildFolder))
        sharp(file)
          .rotate()
          .resize(200, 100)
          .crop(sharp.strategy.attention)
          .toFile(file.replace(demoFolder, buildFolder).replace('.jpg', '_thumbnail.jpg'))
        return
      }
      copy(file, buildFolder, {srcBase: demoFolder}, err => {
        if (err) {
          throw err
        }
      })
    }))

    globby(fileGlob).then(inputFiles =>
      Promise.all(inputFiles.map(filePath => new Promise((resolve, reject) => {
        const file = path.parse(filePath).name
        const inFile = path.join(demoFolder, `${file}.js`)
        const outFile = path.join(buildFolder, file)

        const b = browserify({
          entries: [inFile],
          plugin: [errorify, collapse],
          debug: watch,
          cache: {},
          packageCache: {}
        })

        const bundle = () => {
          b.bundle().pipe(createWriteStream(`${outFile}.js`))
        }

        // Either uglify or watch
        if (watch) {
          b.on('update', bundle)
          b.plugin(watchify)
        } else {
          b.transform({
            global: true,
            ignore: ['**/*.css']
          }, 'uglifyify')
        }

        b.on('log', message => log.info(message))
        b.on('error', message => {
          log.error(message)
          reject(new Error())
        })
        b.on('css stream', readable => {
          if (watch) {
            resolve()
          } else {
            readable.on('data', () => {
              resolve()
            })
          }
        })
        b.plugin(cssModulesify, {
          after: [cssNext()],
          output: `${outFile}.css`,
          jsonOutput: `${outFile}.json`,
          generateScopedName: prod ? shortid : longid,
          global: true,
          cache: {}
        })
        bundle()
      })))
      .then(resolve)
      .catch(reject)
    )
  })
})

export default build
