import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';
import homePage from '../../pages/homePage';

const LoginPage = new loginPage();
const HomePage = new homePage();

Given('I open the website', () => {
  cy.visit('/');
  LoginPage.validateLoginPage();
});

When('I login with the user {string}', (userName) => {
  cy.authentication(userName);
});

Then('I should see the header {string}', (title) => {
  HomePage.validateInventaryUrl();
  HomePage.validateHeaderTitle(title);
});

Then('I should see the warning', () => {
  LoginPage.warningMessage();
});