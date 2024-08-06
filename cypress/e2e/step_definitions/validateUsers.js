import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I open the website', () => {
    cy.visit('/');
    loginPage.validateLoginPage();
});

When('I login with the user {string}', (userName) => {
    cy.authentication(userName);
});

Then('I should see the header {string}', (title) => {
    homePage.validateInventoryUrl();
    homePage.validateHeaderTitle(title);
});

Then('I should see the warning', () => {
    loginPage.warningMessage();
});
