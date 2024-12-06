const { waitForElementVisible } = require('../utils/helpers');

class SmsVerificationPage {
    get smsInput() {
        return $('android=new UiSelector().className("android.widget.EditText")');
    }

    get verifyButton() {
        return $('android=new UiSelector().text("Verify")');
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
}

module.exports = new SmsVerificationPage();
