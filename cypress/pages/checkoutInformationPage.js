import findObjectByKey from '../support/utils/fixtureInteraction';

class CheckOutInformationPage {
    static elements = {
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        postalCodeField: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
    };

    static typeFirstName(firstName) {
        this.elements.firstNameField().should('be.visible').type(firstName);
    }

    static typeLastName(lastName) {
        this.elements.lastNameField().should('be.visible').type(lastName);
    }

    static typePostalCode(postalCode) {
        this.elements.postalCodeField().should('be.visible').type(postalCode);
    }

    static completePersonalInformation(users, username) {
        // TODO: Implement a specific object type for the user
        const user = findObjectByKey(users, username);
        this.typeFirstName(user.first_name);
        this.typeLastName(user.last_name);
        this.typePostalCode(user.zip_code);
        this.elements.continueButton().should('exist').click();
    }
}

export default CheckOutInformationPage;
