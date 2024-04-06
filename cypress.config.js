const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'http://zero.webappsecurity.com/index.html',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    browser: 'chrome',
    defaultCommandTimeout: 10000, 
    requestTimeout: 10000,        
    responseTimeout: 10000,

    setupNodeEvents(on, config) {
      
    },
  },
});
