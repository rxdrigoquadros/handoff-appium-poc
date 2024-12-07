const { waitForElementVisible } = require('../utils/helpers');

class LoginPage {
    get phoneOptionButton() {
        return $('android=new UiSelector().text("Phone")');
    }

    get phoneInput() {
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get continueButton() {
        return $('android=new UiSelector().text("Continue")');
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
