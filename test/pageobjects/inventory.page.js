import { $ } from "@wdio/globals";
import Page from "./page.js";

class InventoryPage extends Page {
  dynamicBtnAddToCart(product) {
    return $(`#add-to-cart-${this.convertToSlug(product)}`);
  }

  dynamicBtnRemove(product) {
    return $(`#remove-${this.convertToSlug(product)}`);
  }

  async clickOnAddToCart(product) {
    await this.dynamicBtnAddToCart(product).click();
  }

  async clickOnRemove(product) {
    await this.dynamicBtnRemove(product).click();
  }

  async verifyThatProductIsAddedToCart(product) {
    await expect(this.dynamicBtnRemove(product)).toBeDisplayed();
    await expect(this.dynamicBtnAddToCart(product)).not.toExist();
    await expect(this.lblCartBadge).toHaveText("1");
  }

  async verifyThatProductIsRemovedFromCart(product) {
    await expect(this.dynamicBtnAddToCart(product)).toBeDisplayed();
    await expect(this.dynamicBtnRemove(product)).not.toExist();
    await expect(this.lblCartBadge).not.toExist();
  }

  open() {
    return super.open("/inventory.html");
  }

  convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
}

export default new InventoryPage();
