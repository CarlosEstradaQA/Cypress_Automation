class FinishCheckoutPage {
    elements = {
        thankMessage: () => cy.get('[data-test="complete-header"]'),
        checkoutStatusLabel: () => cy.get('[data-test="title"]'),
    };

    validateFinishMessage() {
        this.elements.thankMessage().should('be.visible').should('exist').invoke('text')
            .then((tempValue) => {
                expect(tempValue).to.equal('Thank you for your order!');
            });
        this.elements.checkoutStatusLabel().should('be.visible').should('exist').invoke('text')
            .then((tempValue) => {
                expect(tempValue).to.equal('Checkout: Complete!');
            });
    }
}

export default FinishCheckoutPage;
