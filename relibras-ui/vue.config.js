module.exports = {
    devServer: {
      proxy: {
        '^/words': {
          target: 'http://localhost:8080'
        }
      }
    }
  }