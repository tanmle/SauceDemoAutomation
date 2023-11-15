import { Given, When, Then } from "@cucumber/cucumber";
import InventoryPage from "../../pageobjects/inventory.page.js";
import CartPage from "../../pageobjects/cart.page.js";

Given("The user is on the inventory page", async () => {
  await InventoryPage.open();
});

When(
  "The user clicks on Add to cart on a product named {string}",
  async (product) => {
    await InventoryPage.clickOnAddToCart(product);
  }
);

When(
  "The user clicks on Remove on a product named {string}",
  async (product) => {
    await InventoryPage.clickOnRemove(product);
  }
);

When("The user clicks on Cart", async () => {
  await InventoryPage.clickOnCart();
});

Then(
  "The product named {string} should be added to the Cart properly",
  async (product) => {
    await InventoryPage.verifyThatProductIsAddedToCart(product);
  }
);

Then(
  "The product named {string} should be removed from the Cart properly",
  async (product) => {
    await InventoryPage.verifyThatProductIsRemovedFromCart(product);
  }
);

Then("The user should be redirected to the inventory", async () => {
  await InventoryPage.verifyThatShoppingCartDisplay();
});
