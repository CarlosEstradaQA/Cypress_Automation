class finishCheckoutPage {
    elements = {
        thankMessage: () => cy.get('[data-test="complete-header"]'),
        checkoutStatusLabel: () => cy.get('[data-test="title"]'),
    };

    validateFinishMessage() {
        this.elements.thankMessage().should('be.visible').should('exist').invoke('text')
            .then((tempvalue) => {
                expect(tempvalue).to.equal('Thank you for your order!');
            });
        this.elements.checkoutStatusLabel().should('be.visible').should('exist').invoke('text')
            .then((tempvalue) => {
                expect(tempvalue).to.equal('Checkout: Complete!');
            });
    }
}

export default finishCheckoutPage;
