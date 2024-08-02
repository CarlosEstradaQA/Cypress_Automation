import { Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../pages/CartPage';
import FinishCheckoutPage from '../../pages/FinishCheckOutPage';
import CheckoutConfirmPage from '../../pages/CheckOutConfirmPage';

Then('I should see the title of {string}', (title) => {
    CartPage.validateCartUrl();
    CartPage.validateCartTitle(title);
});
Then('I should see the cart with {string} badge', (numberOfProducts) => {
    CartPage.validateCartBadge(numberOfProducts);
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
