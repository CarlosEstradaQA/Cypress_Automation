class CartPage {
    static elements = {
        urlPath: () => cy.url(),
        cartTitle: () => cy.get('[data-test="title"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        removeProductButton: () => cy.get('[data-test^="remove-"]').contains('Remove'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        productList: () => cy.get('[data-test="inventory-item"]'),
        productPrice: () => cy.get('[data-test="inventory-item-price"]'),
    };

    static validateCartUrl() {
        this.elements.urlPath().should('eq', 'https://www.saucedemo.com/cart.html');
    }

    static validateCartTitle(title) {
        this.elements.cartTitle().should('be.visible').contains(title);
        this.elements.productPrice().should('be.visible').should('exist').invoke('text')
            .then((value) => {
                Cypress.env('itemPrice', value);
            });
    }

    static validateCartBadge(amount) {
        cy.scrollTo('top');
        if (amount === '0') {
            this.elements.cartBadge().should('not.exist');
        } else {
            this.elements.cartBadge().should('be.visible').invoke('text').should('equal', amount);
        }
    }

    static removeProductFromCart() {
        this.elements.removeProductButton().should('be.visible').should('exist').click();
        this.elements.productList().should('have.lengthOf', 0);
    }

    static validateCheckoutButton() {
        this.elements.checkoutButton().should('be.visible').should('exist').click();
    }
}

export default CartPage;
