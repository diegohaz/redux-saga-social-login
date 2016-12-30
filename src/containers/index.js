const req = require.context('.', false, /^((?!index).)*$/)

req.keys().forEach((key) => {
  const containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
  module.exports[containerName] = req(key).default
})
