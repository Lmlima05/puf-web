const path = require('patch')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  }

  return config
}
