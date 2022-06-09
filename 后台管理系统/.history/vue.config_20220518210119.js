const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

module.exports = {
    devServer: {
      onBeforeSetupMiddleware: (app, server, compiler) =>{
        require('./mock-server.js')
      }
    }
}