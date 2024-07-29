import {When, Then } from 'cypress-cucumber-preprocessor/steps';
import cartPage from '../../pages/cartPage';
import checkoutConfirmPage from '../../pages/checkoutConfirmPage';
import finishCheckoutPage from '../../pages/finishCheckoutPage';

const CartPage = new cartPage();
const CheckoutConfirmPage = new checkoutConfirmPage();
const FinishCheckoutPage = new finishCheckoutPage();

Then('I should see the title of {string}', (title) => {
    CartPage.validateCartUrl();
    CartPage.validateCartTitle(title);
});
Then('I should see the cart with {string} badget', (numberofProducts) => {
    CartPage.validateCartBadget(numberofProducts);
});

Then('I should remove the product as desired', () => {
    CartPage.removeProductFromCart();
});

Then('I should fill all personal of {string} for checkout', (user) => {
    CartPage.validateCheckoutButton();
    cy.personalInformation(user);
});

Then('I Check the cost of the product', () => {
    CheckoutConfirmPage.validateProductPrice();
});

Then('I end the process with a success message', () => {
    CheckoutConfirmPage.clickFinishButton();
    FinishCheckoutPage.validateFinishMessage();
});