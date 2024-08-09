@validateUsers
Feature: Login to a website

    Background: go to website
        Given I open the website

    @smokeTest
    Scenario: user can successful login
        When I login with the user 'standard_user'
        Then I should see the header 'Swag Labs'

    Scenario: user can login with problem user
        When I login with the user 'problem_user'
        Then I should see the header 'Swag Labs'

    Scenario: user can login with delay
        When I login with the user 'performance_glitch_user'
        Then I should see the header 'Swag Labs'

    Scenario: user can login with error user
        When I login with the user 'error_user'
        Then I should see the header 'Swag Labs'

    Scenario: user can login with visual user
        When I login with the user 'visual_user'
        Then I should see the header 'Swag Labs'

    Scenario: user can't login with non-existent user
        When I login with the user 'no_exist_user'
        Then I should see the warning

    Scenario: user can't login with locked user
        When I login with the user 'locked_out_user'
        Then I should see the warning

    Scenario: user can't login with empty username
        When I login with the user ' '
        Then I should see the warning

    Scenario: user can't login with empty password
        When I login with the user 'empty_password'
        Then I should see the warning
