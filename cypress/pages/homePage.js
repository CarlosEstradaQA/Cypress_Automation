class HomePage {
    static elements = {
        burgerButton: () => cy.get('#react-burger-menu-btn'),
        allItemsBurgerOption: () => cy.get('#inventory_sidebar_link'),
        productList: () => cy.get('[data-test="inventory-item"]'),
        urlPath: () => cy.url(),
        headerTitle: () => cy.get('.app_logo'),
        filterDropdown: () => cy.get('[data-test="product-sort-container"]'),
        cartListButton: () => cy.get('[data-test="shopping-cart-link"]'),
        addToCartButton: () => cy.get('[data-test^="add-to-cart-"]').first(),
    };

    static validateInventoryUrl() {
        this.elements.urlPath().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    static validateHeaderTitle(title) {
        this.elements.headerTitle().should('be.visible').contains(title);
    }

    static validateProductsLength() {
        this.elements.productList().should('have.length.at.gt', 1);
        this.elements.productList().should('have.length.at.least', 6);
    }

    static validateTitleOfProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_name').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    static validatePriceOfProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_price').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    static validateDescriptionOfProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_desc').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    static validatePhotoOfProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('[id$="_img_link"]').should('be.visible')
                .should('exist')
                .should('not.be.empty');
        });
    }

    static OrderByNameDescendant() {
        this.elements.filterDropdown().should('be.visible').select('za');
    }

    static OrderByPriceDescendant() {
        this.elements.filterDropdown().should('be.visible').select('hilo');
    }

    static addProductToCartList() {
        this.elements.addToCartButton().click();
        this.elements.cartListButton().click();
    }
}
export default HomePage;
