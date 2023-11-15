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