const { waitForElementVisible } = require('../utils/helpers');

class LoginPage {
    get signupButton() {
        return $('android=new UiSelector().text("Create an account")')
    }

    get phoneOptionButton() {
        return $('android=new UiSelector().text("Phone")');
    }

    get emailOptionButton() {
        return $('android=new UiSelector().text("Email")');
    }

    get phoneInput() {
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get continueButton() {
        return $('android=new UiSelector().text("Continue")');
    }

    async signUpButton() {
        await waitForElementVisible(this.signupButton);
        await this.signUpButton.click();
    }
    
    async selectPhoneOption() {
        await waitForElementVisible(this.phoneOptionButton);
        await this.phoneOptionButton.click();
    }

    async selectEmailOption() {
        const waitForElementVisible(this.emailOptionButton);
        await this.emailOptionButton.click();
    }
    
    async enterPhoneNumber(phoneNumber) {
        const phoneInputElement = await this.phoneInput;
        await waitForElementVisible(phoneInputElement);
        await phoneInputElement.setValue(phoneNumber);
    }

    async enterEmailAddress(email) {
        const emailInputElement = await this.email;
        await waitForElementVisible(emailInputElement);
        await emailInputElement.setValue(email);
    }
    
    async clickContinueButton() {
        await waitForElementVisible(this.continueButton);
        await this.continueButton.click();
    }
}

module.exports = new LoginPage();
