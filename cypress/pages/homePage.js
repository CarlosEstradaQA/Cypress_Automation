class homePage {
    elements = {
        burguerButton: () => cy.get('#react-burger-menu-btn'),
        allItemsBurgerOption: () => cy.get('#inventory_sidebar_link'),
        productList: () => cy.get('[data-test="inventory-item"]'),
        urlPath: () => cy.url(),
        headerTitle: () => cy.get('.app_logo'),
        filterDropdown: () => cy.get('[data-test="product-sort-container"]'),
        cartListButton: () => cy.get('[data-test="shopping-cart-link"]'),
        addToCartButton: () => cy.get('[data-test^="add-to-cart-"]').first(),
    };

    validateInventaryUrl() {
        this.elements.urlPath().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    validateHeaderTitle(title) {
        this.elements.headerTitle().should('be.visible').contains(title);
    }

    validateProductsLenght() {
        this.elements.productList().should('have.length.at.gt', 1);
        this.elements.productList().should('have.length.at.least', 6);
    }

    validateTitleofProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_name').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    validatePriceofProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_price').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    validateDescriptionofProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('.inventory_item_desc').should('be.visible')
                .should('exist')
                .invoke('text')
                .should('exist')
                .should('not.be.empty');
        });
    }

    validatePhotoofProducts() {
        this.elements.productList().each(($product) => {
            cy.get($product).find('[id$="_img_link"]').should('be.visible')
                .should('exist')
                .should('not.be.empty');
        });
    }

    OrderByNameDescendant() {
        this.elements.filterDropdown().should('be.visible').select('za');
    }

    OrderByPriceDescendant() {
        this.elements.filterDropdown().should('be.visible').select('hilo');
    }

    addProductToCartList() {
        this.elements.addToCartButton().click();
        this.elements.cartListButton().click();
    }
}
export default homePage;
