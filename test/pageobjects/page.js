import { browser } from "@wdio/globals";

export default class Page {
  get btnMenu() {
    return $("#menu_button_container button#react-burger-menu-btn");
  }

  get lnkResetAppState() {
    return $("#reset_sidebar_link");
  }

  get lnkLogout() {
    return $("#logout_sidebar_link");
  }

  get lblCartBadge() {
    return $(".shopping_cart_badge");
  }

  get lnkCart() {
    return $(".shopping_cart_link");
  }

  async resetAppState() {
    await this.btnMenu.click();
    await this.lnkResetAppState.waitForClickable();
    await this.lnkResetAppState.click();
  }

  async logout() {
    await this.btnMenu.click();
    await this.lnkLogout.waitForClickable();
    await this.lnkLogout.click();
  }

  async clickOnCart() {
    await this.lnkCart.click();
  }

  async verifyThatShoppingCartDisplay() {
    await expect(this.lnkCart).toBePresent();
  }

  open(path) {
    return browser.url(`${path}`);
  }
}
