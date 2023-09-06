const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "http://hauslondon.com",
    "viewportHeight": 1000,
    "viewportWidth": 1280
  },
});
