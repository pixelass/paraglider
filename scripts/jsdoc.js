import path from 'path'
import rm from 'rimraf'
import mkdirp from 'mkdirp'
import config from '../jsdoc.json' // eslint-disable-line import/extensions

const docsFolder = path.join(__dirname, '../', config.opts.destination)
rm(docsFolder, err => {
  if (err) {
    throw err
  }
  mkdirp(docsFolder)
})
