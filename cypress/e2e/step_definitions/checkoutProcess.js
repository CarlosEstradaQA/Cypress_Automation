import { Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../pages/CartPage';
import CheckoutConfirmPage from '../../pages/CheckoutConfirmPage';
import FinishCheckoutPage from '../../pages/FinishCheckoutPage';

const cartPage = new CartPage();
const checkoutConfirmPage = new CheckoutConfirmPage();
const finishCheckoutPage = new FinishCheckoutPage();

Then('I should see the title of {string}', (title) => {
    cartPage.validateCartUrl();
    cartPage.validateCartTitle(title);
});

Then('I should see the cart with {string} badget', (numberofProducts) => {
    cartPage.validateCartBadget(numberofProducts);
});

Then('I should remove the product as desired', () => {
    cartPage.removeProductFromCart();
});

Then('I should fill all personal of {string} for checkout', (user) => {
    cartPage.validateCheckoutButton();
    cy.personalInformation(user);
});

Then('I Check the cost of the product', () => {
    checkoutConfirmPage.validateProductPrice();
});

Then('I end the process with a success message', () => {
    checkoutConfirmPage.clickFinishButton();
    finishCheckoutPage.validateFinishMessage();
});
