import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

Then('I should see the all products', () => {
    homePage.validateProductsLength();
});

Then('I should see the title of the products', () => {
    homePage.validateTitleOfProducts();
});

Then('I should see the price of the products', () => {
    homePage.validatePriceOfProducts();
});

Then('I should see the description of the products', () => {
    homePage.validateDescriptionOfProducts();
});

Then('I should see the photo of the products', () => {
    homePage.validatePhotoOfProducts();
});

When('I order the products by name descendant', () => {
    homePage.orderByNameDescendant();
});

When('I order the products by price descendant', () => {
    homePage.orderByPriceDescendant();
});

When('I add a product to the cart', () => {
    homePage.addProductToCartList();
});
