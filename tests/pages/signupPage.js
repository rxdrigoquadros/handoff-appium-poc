const { waitForElementVisible } = require('../utils/helpers');

class SignupPage {
    get fullNameInput() {
        return $('android=new UiSelector().text("Full Name *")');
    }

    get companyInput() {
        return $('android=new UiSelector().text("Company *")');
    }

    get emailInput() {
        return $('android=new UiSelector().text("Email *")');
    }

    get phoneInput() {
        return $('android=new UiSelector().text("Phone *")');
    }

    get getStartedFreeButton() {
        return $('android=new UiSelector().text("Get Started Free")');
    }

    async enterFullName(randomFullName) {
        const fullNameInputElement = await this.fullNameInput;
        await waitForElementVisible(fullNameInputElement);
        await fullNameInputElement.setValue(randomFullName);
    }

    async enterCompany(randomCompanyName) {
        const companyInputElement = await this.companyInput;
        await waitForElementVisible(companyInputElement);
        await companyInputElement.setValue(randomCompanyName);
    }

    async enterEmail(randomEmail) {
        const emailInputElement = await this.emailInput;
        await waitForElementVisible(emailInputElement);
        await emailInputElement.setValue(randomEmail);
    }

    async enterPhone(phoneNumber) {
        const phoneInputElement = await this.phoneInput;
        await waitForElementVisible(phoneInputElement);
        await phoneInputElement.setValue(phoneNumber);
    }

    async clickGetStartedFreeButton() {
        await waitForElementVisible(this.getStartedFreeButton);
        await this.getStartedFreeButton.click();
    }
}

module.exports = new SignupPage();
