import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get txtUsername () {
        return $('[data-test="username"]');
    }

    get txtPassword () {
        return $('[data-test="password"]');
    }

    get btnSubmit () {
        return $('[data-test="login-button"]');
    }

    get lblErrorMessage () {
        return $('[data-test="error"]');
    }

    async login (username, password) {
        await this.txtUsername.setValue(username);
        await this.txtPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async verifyErrorMessage (message) {
        await expect(this.lblErrorMessage).toHaveTextContaining(message);
    }

    async verifyLoginPageDisplay() {
        await expect(this.txtUsername).toBePresent();
    }

    open () {
        return super.open('/');
    }
}

export default new LoginPage();
