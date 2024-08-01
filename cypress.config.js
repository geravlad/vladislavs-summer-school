const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
  },
  env: {
    username: "team1@test.com",
    password: "team1pass",
    invalidUsername: "mark.john@gmail.com",
    invalidPassword: "abc135234"
  },
  e2e: {
    viewportWidth: 1920,
    viewportWidth: 1080,
    trashAssetsBeforeRuns: true,
    baseUrl: "https://coe-webstore.tdlbox.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
