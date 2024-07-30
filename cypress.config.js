const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "team1@test.com",
    password: "team1pass",
  },
  e2e: {
    viewportWidth: 1920,
    viewportWidth: 1080,
    baseUrl: "https://coe-webstore.tdlbox.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
