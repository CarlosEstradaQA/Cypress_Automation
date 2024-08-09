import LoginPage from '../pages/LoginPage';
import CheckoutInformationPage from '../pages/CheckoutInformationPage';

const loginPage = new LoginPage();
const checkoutInformationPage = new CheckoutInformationPage();

Cypress.Commands.add('authentication', (userName) => {
    cy.fixture('users').then((userData) => {
        loginPage.login(userData, userName);
    });
});

Cypress.Commands.add('personalInformation', (userName) => {
    cy.fixture('users').then((userData) => {
        checkoutInformationPage.completePersonalInformation(userData, userName);
    });
});
