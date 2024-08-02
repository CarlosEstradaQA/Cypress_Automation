const { defineConfig } = require('cypress');
const setupNodeEvents = require('./cypress/plugins/index'); // Move to top level and remove .js extension

module.exports = defineConfig({
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 42000,
    pageLoadTimeout: 300000,
    responseTimeout: 60000,
    requestTimeout: 405700,
    chromeWebSecurity: false,
    env: {
        itemPrice: '',
    },
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        setupNodeEvents(on, config) {
            return setupNodeEvents(on, config); // Use the imported setupNodeEvents
        },
        specPattern: 'cypress/e2e/**/*.feature',
        defaultCommandTimeout: 10000,
    },
});
