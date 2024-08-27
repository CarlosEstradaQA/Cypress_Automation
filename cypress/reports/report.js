const report = require('multiple-cucumber-html-reporter');
const moment = require('moment');

report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: './cypress/cucumber-report',
    screenshotsFolder: 'reports/cypress/screenshots',
    ignoreBadJsonFile: true,
    durationInM: true,
    displayDuration: true,
    reportName: 'Cypress automation with Cucumber over SauceDemo',
    pageTitle: 'Automation Report',
    displayReportTime: true,

    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Sauce Demo' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Environment', value: 'Pre-production' },
            { label: 'Execution End Time', value: moment().format('YYYY-MM-DD, HH:mm:ss A') },
        ],
    },
});
