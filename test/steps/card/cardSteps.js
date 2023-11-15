import { Given, When, Then } from "@cucumber/cucumber";
import CartPage from "../../pageobjects/cart.page.js";

Given("The user is on the card page", async () => {
  await CartPage.open();
});

When(
  "The user checks out the product with first name {string} last name {string}, and postal code {string}",
  async (firstName, lastName, postalCode) => {
    await CartPage.checkout(firstName, lastName, postalCode);
  }
);

Then("The product should be checked out properly", async () => {
  await CartPage.verifyThatOrderIsComplete();
});
