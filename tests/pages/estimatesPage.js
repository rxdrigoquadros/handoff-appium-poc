const { waitForElementVisible } = require('../utils/helpers');

class EstimatesPage {
    get estimatesPageTitle() {
        return $('android=new UiSelector().text("Estimates").instance(0)')
    }

    get newEstimateButton() {
        return $('android=new UiSelector().resourceId("button-text")')
    }

    get draftEstimatesFilterButton() {
        return $('android=new UiSelector().text("Draft")')
    }

    get numberDraftEstimates() {
        return $('android=')
    }

    get sentEstimatesFilterButton() {
        return $('android=new UiSelector().text("Sent")')
    }

    get numberSentEstimates() {
        return $('android=')
    }

    get approvedEstimatesFilterButton() {
        return $('android=new UiSelector().text("Approved")')
    }

    get numberApprovedEstimates() {
        return $('android=')
    }

    get declinedEstimatesFilterButton() {
        return $('android=new UiSelector().text("Declined")')
    }

    get numberDeclinedEstimates() {
        return $('android=')
    }

    async clicknewEstimateButton() {
        await waitForElementVisible(this.newEstimateButton);
        await this.newEstimateButton.click();
    }

    async verifySuccess() {
        const successMessage = await this.estimatesPageTitle
        await waitForElementVisible(successMessage);
    }
}

module.exports = new EstimatesPage();
