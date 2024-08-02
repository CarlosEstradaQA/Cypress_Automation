import findObjectByKey from '../support/utils/fixtureInteraction';

class LoginPage {
    static elements = {
        userField: () => cy.get('[data-test="username"]'),
        passwordField: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        warningMessage: () => cy.get('[data-test="error"]'),
        loginHeaderTitle: () => cy.get('.login_logo'),
    };

    static validateLoginPage() {
        this.elements.loginHeaderTitle().should('exist').should('be.visible');
    }

    static typeUsername(username) {
        this.elements.userField().should('be.enabled').type(username);
    }

    static typePassword(password) {
        this.elements.passwordField().should('be.enabled').type(password);
    }

    static clickLogin() {
        this.elements.loginBtn().should('be.enabled').click();
    }

    static login(users, username) {
        // TODO: Create a specific type for the user object
        const user = findObjectByKey(users, username);
        this.typeUsername(user.username);
        this.typePassword(user.password);
        this.clickLogin();
    }

    static warningMessage() {
        this.elements.warningMessage().should('be.visible');
    }
}
export default LoginPage;
