import path from 'path'

function Longid() {
  const longid = (selector, file) => {
    const {name} = path.parse(file)
    return `${name}__${selector}`
  }
  this.names = {}
  return (name, file) => {
    const obj = this.names[file] || {}
    if (!(name in obj)) {
      obj[name] = longid(name, file)
    }
    this.names[file] = obj
    return obj[name]
  }
}

export default new Longid()
