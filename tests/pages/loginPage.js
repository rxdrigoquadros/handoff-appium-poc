const { waitForElementVisible } = require('../utils/helpers');

class LoginPage {
    get loginButton() {
        return $('android=new UiSelector().text("Log in")');
    }

    get phoneOptionButton() {
        return $('android=new UiSelector().text("Phone")');
    }

    get phoneInput() {
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get continueButton() {
        return $('android=new UiSelector().text("Continue")');
    }
    
    async clickLoginButton() {
        await waitForElementVisible(this.loginButton);
        await this.loginButton.click();
    }

    
    async selectPhoneOption() {
        await waitForElementVisible(this.phoneOptionButton);
        await this.phoneOptionButton.click();
    }

    
    async enterPhoneNumber(phoneNumber) {
        const phoneInputElement = await this.phoneInput;
        await waitForElementVisible(phoneInputElement);
        await phoneInputElement.setValue(phoneNumber);
    }

    
    async clickContinueButton() {
        await waitForElementVisible(this.continueButton);
        await this.continueButton.click();
    }
}

module.exports = new LoginPage();
