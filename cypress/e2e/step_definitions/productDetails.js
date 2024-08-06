import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

Then('I should see the all products', () => {
    homePage.validateProductsLenght();
});

Then('I should see the title of the products', () => {
    homePage.validateTitleofProducts();
});

Then('I should see the price of the products', () => {
    homePage.validatePriceofProducts();
});

Then('I should see the description of the products', () => {
    homePage.validateDescriptionofProducts();
});

Then('I should see the photo of the products', () => {
    homePage.validatePhotoofProducts();
});

When('I order the products by name descendant', () => {
    homePage.OrderByNameDescendant();
});

When('I order the products by price descendant', () => {
    homePage.OrderByPriceDescendant();
});

When('I add a product to the cart', () => {
    homePage.addProductToCartList();
});
