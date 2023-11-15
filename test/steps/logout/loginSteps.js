import { Given, When, Then } from "@cucumber/cucumber";
import InventoryPage from "../../pageobjects/inventory.page.js";

When("The user logs out", async () => {
  await InventoryPage.logout();
});
