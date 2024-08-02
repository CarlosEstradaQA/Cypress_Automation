import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

Given('I open the website', () => {
    cy.visit('/');
    LoginPage.validateLoginPage();
});

When('I login with the user {string}', (userName) => {
    cy.authentication(userName);
});

Then('I should see the header {string}', (title) => {
    HomePage.validateInventoryUrl();
    HomePage.validateHeaderTitle(title);
});

Then('I should see the warning', () => {
    LoginPage.warningMessage();
});
