const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://portal.dev.digitalu.teambespin.us/app/support',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensure your specPattern is set correctly
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    projectId: 'yb5e2a',
    record: true,
    key: process.env.CYPRESS_RECORD_KEY || 'cd82295e-748c-405d-9e9b-532be05b2e2a',
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  viewportWidth: 1280, // Set your desired width here
  viewportHeight: 720  // Set your desired height here
});