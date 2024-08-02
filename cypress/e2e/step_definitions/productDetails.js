import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Then('I should see the all products', () => {
    HomePage.validateProductsLength();
});

Then('I should see the title of the products', () => {
    HomePage.validateTitleOfProducts();
});

Then('I should see the price of the products', () => {
    HomePage.validatePriceOfProducts();
});

Then('I should see the description of the products', () => {
    HomePage.validateDescriptionOfProducts();
});

Then('I should see the photo of the products', () => {
    HomePage.validatePhotoOfProducts();
});

When('I order the products by name descendant', () => {
    HomePage.OrderByNameDescendant();
});

When('I order the products by price descendant', () => {
    HomePage.OrderByPriceDescendant();
});

When('I add a product to the cart', () => {
    HomePage.addProductToCartList();
});
