import { $ } from "@wdio/globals";
import Page from "./page.js";

class CardPage extends Page {
  get btnCheckout() {
    return $("[data-test='checkout']");
  }

  get txtFirstName() {
    return $("[data-test='firstName']");
  }

  get txtLastName() {
    return $("[data-test='lastName']");
  }

  get txtPostalCode() {
    return $("[data-test='postalCode']");
  }

  get btnContinue() {
    return $("[data-test='continue']");
  }

  get btnFinish() {
    return $("[data-test='finish']");
  }

  get lblCompleteHeader() {
    return $(".complete-header");
  }

  async checkout(firstName, lastName, postalCode) {
    await this.btnCheckout.click();
    await this.txtFirstName.setValue(firstName);
    await this.txtLastName.setValue(lastName);
    await this.txtPostalCode.setValue(postalCode);
    await this.btnContinue.click();
    await this.btnFinish.click();
  }

  async verifyThatOrderIsComplete() {
    await expect(this.lblCompleteHeader).toHaveText(
      "Thank you for your order!"
    );
  }

  open() {
    return super.open("/cart.html");
  }
}

export default new CardPage();
