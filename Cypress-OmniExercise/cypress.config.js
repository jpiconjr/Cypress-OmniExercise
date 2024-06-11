const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://portal.dev.digitalu.teambespin.us/app/support',

  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  viewportWidth: 1280, // Set your desired width here
  viewportHeight: 720  // Set your desired height here
});
