import loginPage from '../pages/loginPage';
import checkoutInformationPage from '../pages/checkoutInformationPage';
const LoginPage = new loginPage();
const CheckoutInformationPage = new checkoutInformationPage();

Cypress.Commands.add("authentication", function (userName) {
    cy.fixture("users").then((userData)=>{
        LoginPage.login(userData, userName);
    })
});

Cypress.Commands.add("personalInformation", function (userName) {
    cy.fixture("users").then((userData)=>{
        CheckoutInformationPage.completePersonalInformation(userData, userName);
    })
});