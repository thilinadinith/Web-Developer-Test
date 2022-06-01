const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/scss/styles.scss";`,
      }
    }
  },
  pwa: {
    name: "Web Test App",
    themeColor: "#448aff",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
    
  }
});
