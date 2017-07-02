import {writeFileSync, readFileSync} from 'fs'
import path from 'path'
import pug from 'pug'
import globby from 'globby'
import {name, description} from '../package.json' // eslint-disable-line import/extensions

const views = path.join(__dirname, '../views')
const target = path.join(__dirname, '../docs')

const renderPug = () => {
  // Render all views
  globby([path.join(views, '*.pug'), `!${path.join(views, '_*.pug')}`]).then(files => {
    files.forEach(inFile => {
      const fileName = path.parse(inFile).name
      const outFile = path.join(target, `./${fileName}.html`)
      const json = readFileSync(path.join(target, `${fileName}.json`)).toString()
      const styles = JSON.parse(json)
      const html = pug.renderFile(inFile, {
        data: {
          fileName,
          name,
          description,
          styles,
          files: files.map(file => path.parse(file).name)
        }
      })
      writeFileSync(outFile, html)
    })
  })
}

export default renderPug
