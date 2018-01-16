var types = require('./types')
var extname = require('path').extname

var db = {}
Object.keys(types).forEach(mime=> {
  types[mime].forEach(extn=> {
    db[extn] = mime
  }) 
})

module.exports = function lookup (path) {
  if (!path || typeof path !== 'string') return false

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return db[extension] || false
}
