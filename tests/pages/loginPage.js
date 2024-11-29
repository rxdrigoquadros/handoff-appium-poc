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

    get smsInput() {
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get verifyButton() {
        return $('android=new UiSelector().text("Verify")');
    }

    get successMessage() {
        return $('android=new UiSelector().text("Estimates")');
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

    
    async enterSmsCode(smsCode) {
        const smsInputElement = await this.smsInput;
        await waitForElementVisible(smsInputElement);
        await smsInputElement.setValue(smsCode);
    }

    async clickVerifyButton() {
        await waitForElementVisible(this.verifyButton);
        await this.verifyButton.click();
    }

    
    async verifyLoginSuccess() {
        const successMessageElement = await this.successMessage;
        await waitForElementVisible(successMessageElement);
        return successMessageElement.isDisplayed();
    }
}

module.exports = new LoginPage();
