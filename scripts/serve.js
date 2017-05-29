import express from 'express'
import log from 'winston'
import pkg from '../package.json' // eslint-disable-line import/extensions
import routes from './routes'

const serve = () => {
  const PORT = process.env.PORT || pkg.config.devPort
  const app = express()
  app.use(express.static('docs'))
  app.set('view engine', 'pug')
  const options = {
    name: pkg.name,
    description: pkg.description
  }
  routes.forEach(({path, file}) => {
    app.get(path, ({params}, res) => {
      const param = file.split(':')[1]
      if (typeof param === 'undefined') {
        options.fileName = file
      } else {
        options.fileName = params[param]
      }
      res.render(options.fileName, options)
    })
  })
  app.listen(PORT, () => {
    log.info(`Example app listening on port ${PORT}!`)
  })
}

export default serve
