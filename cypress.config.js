const { defineConfig } = require('cypress');
const setupNodeEvents = require('./cypress/plugins/index');

error;

module.exports = defineConfig({
    numTestsKeptInMemory: 0, // 0 = default behavior
    // Standardize timeouts across most actions (consider adjusting as needed)
    defaultCommandTimeout: 42000, // 42 seconds
    pageLoadTimeout: 300000, // 30 minutes
    responseTimeout: 60000, // 1 minute
    requestTimeout: 405700, // +40 minutes

    chromeWebSecurity: false, // Set to true for production

    env: {
        // Provide a default value or load from environment variables
        itemPrice: process.env.ITEM_PRICE || '',
    },

    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        setupNodeEvents(on, config) {
            return setupNodeEvents(on, config); // Use the imported setupNodeEvents
        },
        specPattern: 'cypress/e2e/**/*.feature',
        defaultCommandTimeout: 10000, // 10 seconds, override the global default
    },
});
