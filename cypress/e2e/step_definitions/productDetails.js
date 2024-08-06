import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';

const HomePage = new homePage();

Then('I should see the all products', () => {
    HomePage.validateProductsLenght();
});

Then('I should see the title of the products', () => {
    HomePage.validateTitleofProducts();
});

Then('I should see the price of the products', () => {
    HomePage.validatePriceofProducts();
});

Then('I should see the description of the products', () => {
    HomePage.validateDescriptionofProducts();
});

Then('I should see the photo of the products', () => {
    HomePage.validatePhotoofProducts();
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
