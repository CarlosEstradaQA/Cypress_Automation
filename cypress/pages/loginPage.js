import { returnObjectSearchingByKey } from '../support/utils/fixtureInteraction';

class loginPage {
    elements = {
        userField: () => cy.get('[data-test="username"]'),
        passwordField: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        warningMessage: () => cy.get('[data-test="error"]'),
        loginHeaderTitle: () => cy.get('.login_logo'),
    };

    validateLoginPage() {
        this.elements.loginHeaderTitle().should('exist').should('be.visible');
    }

    typeUsername(username) {
        this.elements.userField().should('be.enabled').type(username);
    }

    typePassword(password) {
        this.elements.passwordField().should('be.enabled').type(password);
    }

    clickLogin() {
        this.elements.loginBtn().should('be.enabled').click();
    }

    login(users, username) {
        const user = returnObjectSearchingByKey(users, username);
        this.typeUsername(user.username);
        this.typePassword(user.password);
        this.clickLogin();
    }

    warningMessage() {
        this.elements.warningMessage().should('be.visible');
    }
}

export default loginPage;
