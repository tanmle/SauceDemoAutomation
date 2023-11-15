Feature: User logout
  As a user
  I want to be able to logout after login

  Background:
    Given The user is on the login page
    And The user logins with username as "standard_user" and password as "secret_sauce"

  Scenario: Successful logout
    When The user logs out
    Then The user should see login page
