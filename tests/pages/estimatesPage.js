const { waitForElementVisible } = require('../utils/helpers');

class EstimatesPage {
    async verifyLoginSuccess() {
        const successMessageElement = await this.successMessage;
        await waitForElementVisible(successMessageElement);
        return successMessageElement.isDisplayed();
    }
}

module.exports = new EstimatesPage();
