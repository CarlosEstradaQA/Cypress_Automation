import { returnObjectSearchingByKey } from "../support/utils/fixtureInteraction";

class checkoutInformationPage{
    elements = {
        firstNameField : () => cy.get('[data-test="firstName"]'),
        lastNameField : () => cy.get('[data-test="lastName"]'),
        postalCodeField : () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]')
    }
    typeFirstName(firstName){
        this.elements.firstNameField().should('be.visible').type(firstName);
    }
    typeLastName(lastName){
        this.elements.lastNameField().should('be.visible').type(lastName);
    }
    typePostalCode(postalCode){
        this.elements.postalCodeField().should('be.visible').type(postalCode);
    }
    completePersonalInformation(users,username){
        let user = returnObjectSearchingByKey(users, username);
        this.typeFirstName(user.first_name);
        this.typeLastName(user.last_name);
        this.typePostalCode(user.zip_code);
        this.elements.continueButton().should('exist').click();
    }
}

export default checkoutInformationPage;