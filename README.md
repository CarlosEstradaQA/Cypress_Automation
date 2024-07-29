# AUTOMATION PROJECT WITH CYPRESS

This project contains the Automated tests for the Sauce demo page, the same has been created using Cypress as the main automation tool

### Tools used to create this project:

-   Cypress
-   Javascript
-   mocha
-   cucumber

## Page Object Model (POM)

As you can see, this project is based on the POM test design pattern, to be more beneficial in the long run and easily maintainable in the future.

Therefore, I mention some of the uses of this POM pattern and its benefits

### Uses:

#### Separation of test logic and page structure

POM helps to keep the test code separate from the code that interacts with the page. This means that any changes to the user interface only require changes to the corresponding page object code and not to the tests themselves.

#### Code reuse:

Methods defined on page objects can be reused in multiple tests, which reduces code duplication and eases maintenance.

#### Improved readability:

By using POM, tests become more readable and understandable. Methods on page objects can have descriptive names that clearly explain what they do, making tests easier to understand.

#### Ease maintenance:

If the user interface changes, only the corresponding page objects need to be updated, rather than modifying all affected tests. This reduces the time and effort required to maintain the test suite.

### Benefits:

#### Reduced code duplication:

POM enables centralization of UI-related logic, which reduces code duplication and makes it easier to manage page elements and actions.

#### Scalability:

As the application grows, POM facilitates scalability of the testing framework. New pages and functionality can be added without significantly affecting existing tests.

#### Maintainability:

The separation of test logic and page structure makes tests easier to maintain. Changes to the user interface only require modifications to page objects, not to all tests.

#### Clarity and organization:

POM organizes test code in a way that reflects the structure of the application, providing a clear and organized view of the system under test.

In conclusion, using POM with, for example, Cypress, ensures that test automation can be handled efficiently on projects of any size with significant improvements in maintainability, scalability and readability.

## Description of the Packages in this project

This project is divided in these packages: e2e, fixtures, plugins, pages and suppport.

### E2E:

This is an important folder. Because it contains all feature files (with .feature extension), this is where the tests are written using the Gherkin language. And all tests should sit inside it Cypress will looks for test files here by default, these contain the test cases and the steps that were defined to execute the necessary flows for the project.

### Fixtures:

This folder helps to maintain data files like users.json, which can be used to mock different propousal data, it can also be used as intercept files to store the json response of an API.

### Plugins:

Helps modify or extend the internal behavior of Cypress. Users can extend this framework or customize it beyond what Cypress offers by default.

### Pages:

Contains the .js files where the mapping of the web pages elements takes place. Such mappings are done by cypress selectors (for the most part), id or class.

### Support:

The support folder contains common files (reusable code, global variables, etc.), that needs to be accessed globally inside the framework. In this folder, two more folders can be found, page_objets and step_definitions.

### E2E/step_definitions

In this folder you will find everything related to the step definitions that contain the function or method that relates the step of the scenario with the actions performed by the automation, as well as manage the input data to be available for the methods and functions.

### Other files:

-   support.commands: In this file, custom commands were created that can be used as extensions to existing cypress (cy) commands.
-   support.e2e: This file contains global hooks borrowed by Mocha
-   Gitignore: In this file are excluded all files that are unnecessary or not recommended to upload on the project's remote repository.
-   Cypress.config.js: In this file is the cypress configuration, for example viewport or timeouts, environtment variables, and specific configuration for e2e and component testing.
-   Package.json: This is a configuration file, containing data like the project's name, scripts that can be used and versions of components like cypress or cypress cucumber preprocessor.

## How to use this project?

### How to install Cypress in the Local Machine?

-   Open the project with the Visual Studio Code IDE
-   Open the terminal
-   To locally install the node modules and dependencies, type the command **npm install**
-   To locally install Cypress in the project, type the command  **npm install --save-dev**
-   Wait for Cypress to be installed
-   Cypress is installed and ready to be used

### How to execute features with Cypress in the Local Machine?

-   Open the project with the Visual Studio Code IDE
-   Open the terminal
-   To run the project locally using Cypress, type the command  **npm run open**
-   On the emergent Cypress window, select the e2e option and then the feature to execute

### How to execute with the command line?

-   Open the project with Visual Studio Code IDE
-   Open the terminal
-   Type the command  **npm run test**. By default it is executed using the Chrome browser, but if the instruction  **--browser electron**  (or any other supported browser) is added to the command after the "test" instruction, it will run in such browser

## Advantages of my framework

### Centralized Maintenance:

Changes in the UI require updates only in the Page Object classes, reducing the effort needed to maintain multiple test scripts.

### Modular and Scalable:

Adding new functionalities and tests is straightforward, allowing the test suite to grow with the application without becoming unwieldy.

### Enhanced Readability:

Tests remain readable and descriptive, making it easier for new team members to understand and contribute to the test suite.

### Reusable Components:

Common actions and elements can be reused across different tests, promoting code reuse and reducing redundancy.