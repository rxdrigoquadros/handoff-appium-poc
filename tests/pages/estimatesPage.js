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

    get threeDotMenuButton() {
        return $('android=new UiSelector().text("󰇙").instance(0)')
    }

    get cratingEstimateLoader() {
        return $('android=new UiSelector().text("Creating estimate...")')
    }

    get firstExistentEstimateCard() {
        return $('android=new UiSelector().resourceId("card").instance(0)')
    }

    get firstAddItemExistentEstimate() {
        return $('android=new UiSelector().text("󰐕").instance(1)')
    }

    get updateEstimateAddItemTitle() {
        return $('android=new UiSelector().text("Item Title")')
    }

    get updateEstimateAddQuantityItem() {
        return $('android=new UiSelector().text("1")')
    }

    get updateEstimateAddValueItem() {
        return $('android=new UiSelector().text("$0")')
    }

    get doneEstimateEditButton() {
        return $('android=new UiSelector().resourceId("button")')
    }

    async clickNewEstimateButton() {
        await waitForElementVisible(this.newEstimateButton);
        await this.newEstimateButton.click();
    }

    async clickFirstExistentEstimateCard() {
        await waitForElementVisible(this.firstExistentEstimateCard);
        await this.firstExistentEstimateCard.click();
    }

    async clickFirstAddItemExistentEstimate() {
        await waitForElementVisible(this.firstAddItemExistentEstimate);
        await this.firstAddItemExistentEstimate.click();
    }

    async enterUpdateEstimateAddItemTitle(itemTitle) {
        const updateEstimateAddItemTitleElement = await this.updateEstimateAddItemTitle;
        await waitForElementVisible(updateEstimateAddItemTitleElement);
        await updateEstimateAddItemTitleElement.setValue(itemTitle);
    }

    async enterUpdateEstimateAddQuantity(itemQuantity) {
        const updateEstimateAddQuantityItemElement = await this.updateEstimateAddQuantityItem;
        await waitForElementVisible(updateEstimateAddQuantityItemElement);
        await updateEstimateAddQuantityItemElement.setValue(itemQuantity);
    }

    async enterUpdateEstimateAddValue(itemValue) {
        const updateEstimateAddValueItemElement = await this.updateEstimateAddValueItem;
        await waitForElementVisible(updateEstimateAddValueItemElement);
        await updateEstimateAddValueItemElement.setValue(itemValue);
    }

    async verifySuccess() {
        const successMessage = await this.estimatesPageTitle
        await waitForElementVisible(successMessage);
    }
}

module.exports = new EstimatesPage();
