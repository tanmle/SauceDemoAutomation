import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../pageobjects/login.page.js";

Given("The user is on the login page", async () => {
  await LoginPage.open();
});

Given("The user resets app state", async () => {
  await LoginPage.resetAppState();
});

When("The user logins with username as {string} and password as {string}", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("The user should see error message {string}", async (message) => {
  await LoginPage.verifyErrorMessage(message);
});

Then("The user should see login page", async () => {
  await LoginPage.verifyLoginPageDisplay();
});
