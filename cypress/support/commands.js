import LoginPage from '../pages/LoginPage';
import CheckOutInformationPage from '../pages/CheckOutInformationPage';

Cypress.Commands.add('authentication', (userName) => {
    cy.fixture('users').then((userData) => {
        LoginPage.login(userData, userName);
    });
});

Cypress.Commands.add('personalInformation', (userName) => {
    cy.fixture('users').then((userData) => {
        CheckOutInformationPage.completePersonalInformation(userData, userName);
    });
});
