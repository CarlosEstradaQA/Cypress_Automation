@checkoutValidation
Feature: Products details

    Background: go to website
        Given I open the website
        When I login with the user 'standard_user'
        And I add a product to the cart

    @smokeTest
    Scenario: Checkout overview page are enable
        Then I should see the cart with '1' badget
        And I should see the title of 'Your Cart'
        And I should remove the product as desired

    Scenario: User can see that each item has a title
        When I should see the cart with '1' badget
        And I should fill all personal of 'standard_user' for checkout
        And I Check the cost of the product
        Then I end the process with a success message
        And I should see the cart with '0' badget
