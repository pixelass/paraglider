import {writeFileSync, readFileSync} from 'fs'
import path from 'path'
import pug from 'pug'
import globby from 'globby'
import {name, description} from '../package.json' // eslint-disable-line import/extensions

const src = path.join(__dirname, '../views')
const target = path.join(__dirname, '../docs')


const renderPug = () => {
  // Render all views
  globby([path.join(src, '*.pug'), `!${path.join(src, '_*.pug')}`]).then(files => {
    files.forEach(inFile => {
      const fileName = path.parse(inFile).name
      const outFile = path.join(target, `./${fileName}.html`)
      const json = readFileSync(path.join(target, `${fileName}.json`)).toString()
      const styles = JSON.parse(json)[`demo/${fileName}.css`]
      const html = pug.renderFile(inFile, {
        data: {
          fileName,
          name,
          description,
          styles
        }
      })
      writeFileSync(outFile, html)
    })
  })
}

export default renderPug
