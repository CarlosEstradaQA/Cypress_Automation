class checkoutConfirmationPage {
    elements = {
        productPrice: () => cy.get('[data-test="inventory-item-price"]'),
        subtotalLabel: () => cy.get('[data-test="subtotal-label"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
    };

    validateProductPrice() {
        this.elements.productPrice().should('be.visible').should('exist').invoke('text')
            .then((tempvalue) => {
                expect(tempvalue).to.equal(Cypress.env('itemPrice'));
            });
        this.elements.subtotalLabel().should('be.visible').should('exist').invoke('text')
            .then((tempvalue) => {
                expect(tempvalue.split(' ')[2]).to.equal(Cypress.env('itemPrice'));
            });
    }

    clickFinishButton() {
        this.elements.finishButton().should('be.visible').should('exist').click();
    }
}

export default checkoutConfirmationPage;
