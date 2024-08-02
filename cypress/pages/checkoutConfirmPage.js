class CheckOutConfirmationPage {
    static elements = {
        productPrice: () => cy.get('[data-test="inventory-item-price"]'),
        subtotalLabel: () => cy.get('[data-test="subtotal-label"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
    };

    static validateProductPrice() {
        this.elements.productPrice().should('be.visible').should('exist').invoke('text')
            .then((tempValue) => {
                expect(tempValue).to.equal(Cypress.env('itemPrice'));
            });
        this.elements.subtotalLabel().should('be.visible').should('exist').invoke('text')
            .then((tempValue) => {
                expect(tempValue.split(' ')[2]).to.equal(Cypress.env('itemPrice'));
            });
    }

    static clickFinishButton() {
        this.elements.finishButton().should('be.visible').should('exist').click();
    }
}

export default CheckOutConfirmationPage;
