import Abcq from 'abcq'

function Shortid() {
  const shortid = new Abcq()
  this.names = {}
  return (name, file) => {
    const obj = this.names[file] || {}
    if (!(name in obj)) {
      obj[name] = shortid.generate()
    }
    this.names[file] = obj
    return obj[name]
  }
}

export default new Shortid()
