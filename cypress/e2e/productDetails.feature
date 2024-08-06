@validateProducts
Feature: Products details

    Background: go to website
        Given I open the website
        When I login with the user 'standard_user'

    @smokeTest
    Scenario: user can see the all 6 products in total
        Then I should see the all products

    Scenario: User can see that each item has a title
        Then I should see the title of the products

    Scenario: User can see that each item has a price
        Then I should see the price of the products

    Scenario: User can see that each item has a description
        Then I should see the description of the products

    Scenario: User can see that each item has a photo
        Then I should see the photo of the products

    Scenario: user can filter the inventary by name descendent
        When I order the products by name descendant
        Then I should see the title of the products

    Scenario: user can filter the inventary by price descendent
        When I order the products by price descendant
        Then I should see the price of the products

    Scenario: user can add an item to the shopping cart
        When I add a product to the cart
        Then I should see the title of 'Your Cart'
        And I should see the cart with '1' badget
