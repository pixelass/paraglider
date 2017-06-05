import path from 'path'
import rm from 'rimraf'
import mkdirp from 'mkdirp'
import {destination} from '../.esdoc.json' // eslint-disable-line import/extensions

const docsFolder = path.join(__dirname, '../', destination)
rm(docsFolder, err => {
  if (err) {
    throw err
  }
  mkdirp(docsFolder)
})
