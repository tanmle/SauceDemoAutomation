# Sauce Demo Automation

Welcome to the Sauce Demo Automation! This repository contains a set of guidelines and instructions for setting up and run the tests.

## Total tests
Currently, there are 7 tests in total:
- 3 tests for inventory
    ```
    Feature: Inventory
    As a user
    I want to be able to use the inventory properly

    Background:
        Given The user is on the login page
        And The user logins with username as "standard_user" and password as "secret_sauce"
        And The user resets app state
        And The user is on the inventory page

    Scenario: Successful add a product to Cart
        When The user clicks on Add to cart on a product named "Sauce Labs Backpack"
        Then The product named "Sauce Labs Backpack" should be added to the Cart properly

    Scenario: Successful remove a product from Cart
        When The user clicks on Add to cart on a product named "Sauce Labs Backpack"
        And The user clicks on Remove on a product named "Sauce Labs Backpack"
        Then The product named "Sauce Labs Backpack" should be removed from the Cart properly

    Scenario: Successful add and checkout a product
        When The user clicks on Add to cart on a product named "Sauce Labs Backpack"
        And The user clicks on Cart
        And The user checks out the product with first name "Tan" last name "Le", and postal code "550000"
        Then The product should be checked out properly
    ```
- 3 tests for login
    ```
    Feature: User authentication
    As a user
    I want to be able to login to the application
    So that I can access the inventory

    Background:
        Given The user is on the login page

    Scenario: Successful login with valid user
        When The user logins with username as "standard_user" and password as "secret_sauce"
        Then The user should be redirected to the inventory

    Scenario: Unsuccessful login with invalid password
        When The user logins with username as "standard_user" and password as "1234567"
        Then The user should see error message "Username and password do not match any user in this service"

    Scenario: Unsuccessful login with user which is locked out
        When The user logins with username as "locked_out_user" and password as "secret_sauce"
        Then The user should see error message "Sorry, this user has been locked out."

    ```
- 1 test for logout
    ```
    Feature: User logout
    As a user
    I want to be able to logout after login

    Background:
        Given The user is on the login page
        And The user logins with username as "standard_user" and password as "secret_sauce"

    Scenario: Successful logout
        When The user logs out
        Then The user should see login page
    ```


## How to run

Before you can start using this project, you need to ensure that you have the following prerequisites installed on your system:

- **Node.js**: Make sure you have the latest version of Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

After having Nodejs installed, in the root folder of the project, run the following command to install the needed dependencies:

```bash
npm install
```

Then run the following command to run all the tests:
```bash
npm run wdio
```
If you want to run a single test, run the following command ([path-to-feature] could be `test\features\inventory\inventory.feature`):
```bash
npm run wdio-spec [path-to-feature]
```
