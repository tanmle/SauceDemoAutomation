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
